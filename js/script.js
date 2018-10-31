


function Queue() {
    var seatingChart = document.getElementById('seatingChart').value;
    entry.appendChild(document.createTextNode(seatingChart));
    list.appendChild(customerEnter);
    this.customerName = [];
    console.log()
}


Queue.prototype.add = function (position) {
    this.customerName.unshift(position);
}

Queue.prototype.remove = function () {
    this.customerName.pop();
}

Queue.prototype.first = function () {
    return this.customerName[0];
}

Queue.prototype.last = function () {
    return this.customerName[this.customerName.length - 1];
}

Queue.prototype.size = function () {
    return this.customerName.length;
}


document.getElementById("customerEnter").addEventListener("click", function Queue(){
    document.getElementById("customerName").innerHTML = "";
});