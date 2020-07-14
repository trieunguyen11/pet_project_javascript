(function () {
  "use strict";
  var tasker = {
    // var  error, header,myInput, myBtn, taskBody,tasks;
    init: function () {
      this.cacheDom();
      this.bindEvent();
      this.evalTaskList();
    },
    cacheDom: function () {
      this.error = document.getElementById("error");
      this.myInput = document.getElementById("myInput");
      this.myBtn = document.getElementById("myBtn");
      this.tasks = document.getElementById("tasks");
      this.taskChildren = this.tasks.children;
    },
    bindEvent: function () {
      this.myBtn.onclick = this.addTask.bind(this);
      this.myInput.onkeypress = this.enterKey.bind(this);
    },
    evalTaskList: function () {},
    enterKey: function (event) {
      if (this.myInput.value !== "" && this.myInput.value !== undefined) {
        if (event.keyCode === 13) {
          this.render();
        }
      } else {
        var empty = document.createTextNode("not empty");
        this.error.appendChild(empty);
      }
    },
    addTask: function (event) {
      if (this.myInput.value !== "") {
        this.render();
      } else {
        var empty = document.createTextNode("not empty");
        this.error.appendChild(empty);
      }
    },
    render: function () {
      console.log("vao render");
      var taskli, taskliValue;
      taskli = document.createElement("li");
      taskli.setAttribute("class", "addInput");
      taskliValue = document.createTextNode(this.myInput.value);
      taskli.appendChild(taskliValue);
      this.tasks.appendChild(taskli);
    }
  };
  tasker.init();
})();

// var inputq = document.getElementById("myInput");
// inputq.addEventListener("keyup",function(event){
//   if(event.keyCode === 13){
//     element = document.createElement("div");
//     element.value = inputq.value;
//     element.innerHTML = inputq.value;
//     inputq.appendChild(element);
//   }
// });

// function clickInput(){
//   var btnn = document.getElementById("myBtn");
//    element = document.createElement("button");
//     element.value = inputq.value;
//     element.innerHTML = inputq.value;
//     btnn.appendChild(element);
// }
