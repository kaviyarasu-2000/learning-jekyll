$('.datepicker').pickadate({
    disable: [1]
})

let noData = `<tr class="table-dark"><td colspan='9' class='text-center'>No Records Available</td></tr>`;

function addEmptyRow() {
    debugger;
    if ($("#tblData tbody").children().children().length == 0) {
        $("#tblData tbody").append(noData);
    }
}


function clearForm() {
    $("#txtName").val("");
    $("#assignedTask").val("");
    $("#initDate").val("");
    $("#dueDate").val("");
    $("#comments").val("");
    $("#status").val("Open");
}



function buildTable(data) {
    $("#tblData tbody").html("");
    let i = 1;
    let bgColor = "";
    data.forEach(element => {
        if (element.status == "In-progress") {
            bgColor = "table-primary";
        } else if (element.status == "Success") {
            bgColor = "table-success";
        } else {
            bgColor = "";
        }

        let tableRow = `
          <tr class="${bgColor}">
          <td class="text-center"> ${i}</td>
          <td class='text-center'>${element.taskId}</td>
          <td class='txtName'  data-id="${element.id}">${element.personName} </td>
          <td class='assignedTask'>${element.assignedTask}</td>
          <td class='initDate'>${element.initDate}</td>
          <td class='dueDate'>${element.dueDate}</td>
          <td class='comments'>${element.comments}</td>
          <td class='status'>${element.status}</td>
          <td class='text-center'>
          <button type="button" class='btn btn-sm btn-success btn-edit' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Edit</button>
          <button class='btn btn-sm btn-danger btn-delete'>Delete</button>
          </td>
        </tr>`
        $("#tblData tbody").append(tableRow);
        i++;
    });
}

function loadDataFromLocal() {
    let localData = localStorage.getItem('localData');
    let localArray = JSON.parse(localData);
    if (localData) {
        buildTable(localArray);
    }
    addEmptyRow();
}

function addDataToLocal() {
    let localData = localStorage.getItem('localData');
    let taskStorage = localStorage.getItem('taskStorage');
    if (taskStorage) {
        let taskStorageArray = JSON.parse(taskStorage);
        let taskId = taskStorageArray.length + 1;
        taskStorageArray.push(taskId);
        localStorage.setItem('taskStorage', JSON.stringify(taskStorageArray));

    } else {
        const taskobj = [];
        const taskId = 1;
        taskobj.push(taskId);
        localStorage.setItem('taskStorage', JSON.stringify(taskobj));
    }
    if (localData) {
        let taskStorage = localStorage.getItem('taskStorage');
        let taskStorageArray = JSON.parse(taskStorage);
        let localArray = JSON.parse(localData);
        const obj = {
            id: localArray.length + 1,
            taskId: taskStorageArray.length,
            personName: $("#txtName").val(),
            assignedTask: $("#assignedTask").val(),
            initDate: $("#initDate").val(),
            dueDate: $("#dueDate").val(),
            comments: $("#comments").val(),
            status: $("#status").val()
        };
        localArray.push(obj);
        localStorage.setItem('localData', JSON.stringify(localArray));
        loadDataFromLocal();
    } else {
        let taskStorage = localStorage.getItem('taskStorage');
        let taskStorageArray = JSON.parse(taskStorage);
        const arryObj = [];
        const obj = {
            id: 1,
            personName: $("#txtName").val(),
            assignedTask: $("#assignedTask").val(),
            initDate: $("#initDate").val(),
            dueDate: $("#dueDate").val(),
            comments: $("#comments").val(),
            status: $("#status").val()
        };

        if (taskStorage) {
            obj.taskId = taskStorageArray.length;
        } else {
            obj.taskId = 1;
        }
        arryObj.push(obj);
        localStorage.setItem('localData', JSON.stringify(arryObj));
        loadDataFromLocal();
    }
    clearForm();
}

function updateDataFromLocal() {
    let localData = localStorage.getItem('localData');
    let localArray = JSON.parse(localData);
    const oldRecord = localArray.find(m => m.id == $("#txtId").val());
    oldRecord.personName = $("#txtName").val();
    oldRecord.assignedTask = $("#assignedTask").val();
    oldRecord.initDate = $("#initDate").val();
    oldRecord.dueDate = $("#dueDate").val();
    oldRecord.comments = $("#comments").val();
    oldRecord.status = $("#status").val();
    localStorage.setItem('localData', JSON.stringify(localArray));
    loadDataFromLocal();
    clearForm();
}

function deleteDataFromLocal(id) {
    let localData = localStorage.getItem('localData');
    let localArray = JSON.parse(localData);
    let i = 0;
    while (i < localArray.length) {
        if (localArray[i].id === Number(id)) {
            localArray.splice(i, 1);
        } else {
            ++i;
        }
    }
    localStorage.setItem('localData', JSON.stringify(localArray));
    loadDataFromLocal();
}
$(document).ready(function() {
    loadDataFromLocal();
    $('#tblData').on('click', '.btn-edit', function() {
        const personName = $(this).parent().parent().find(".txtName").html();
        const assignedTask = $(this).parent().parent().find(".assignedTask").html();
        const initDate = $(this).parent().parent().find(".initDate").html();
        const dueDate = $(this).parent().parent().find(".dueDate").html();
        const comments = $(this).parent().parent().find(".comments").html();
        const id = $(this).parent().parent().find(".txtName").attr("data-id");
        const status = $(this).parent().parent().find(".status").text();
        console.log($('#status'));
        $("#txtName").val(personName);
        $("#assignedTask").val(assignedTask);
        $("#initDate").val(initDate);
        $("#dueDate").val(dueDate);
        $("#comments").val(comments);
        $("#txtId").val(id);
        $("#status").val(status);
        $("#btnSave").text("Update");
    });

    $('#tblData').on('click', '.btn-delete', function() {
        debugger;
        const id = $(this).parent().parent().find(".txtName").attr("data-id");
        deleteDataFromLocal(id);
    });
    $('.newEntry').on('click', function() {
        clearForm();
    })

    $("#form").on('submit', function() {
        if ($("#txtId").val() == '') {
            addDataToLocal();
        } else {

            updateDataFromLocal();
        }
    });
    $("#btnClear").click(function() {
        clearForm();
    });
});