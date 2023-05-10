//лічильник кліків
var clickCount = 0;
var arr; n; gap; copy; temp; j;
function SortCount() {
    if (clickCount === 0){
        firstsort();
        clickCount++;
    }
    else {
        //сортировка далі
        forwardsort();
    }
}

//функція першої сортировки
function firstsort() {
    var sortedList = document.getElementById("sorted-list");
    // Получаем список элементов из текстового поля
    var inputList = document.getElementById("input-list").value;
    // Разбиваем список на отдельные элементы
    var listArray = inputList.split(",");
    // Преобразуем элементы в числа
    for ( i = 0; i < listArray.length; i+=1) {
        listArray[i] = parseInt(listArray[i]);
        }
    arr = listArray;
    copy = arr.slice(0);
    //Перша сортировка с отриманим списком
    n = arr.length;
    gap = Math.floor(n/2);
	// Выполняем сортировку ShellSort
    for ( i = gap; i < n; i+=1) {
        temp = arr[i];
        for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
            arr[j] = arr[j - gap];
            }
        arr[j] = temp;
        }
    sortedList.innerHTML = "";
    for (i = 0; i < n; i+=1){
        if (copy[i] !== arr[i]){
            var li = document.createElement("li");
	        li.innerHTML = arr[i]+",";
	        li.style.color = "red";
	    }
	    else{
	        var li = document.createElement("li")
	        li.innerHTML = arr[i]+","
	    }
	    sortedList.appendChild(li);
	}
}


//функція наступних пошагових сортировок
function forwardsort(){
    var sortedList = document.getElementById("sorted-list");
    copy = arr.slice(0);

    gap = Math.floor(gap/2);

    for (i = gap; i < n; i+=1) {
		temp = arr[i];
		for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
			arr[j] = arr[j - gap];
		}
		arr[j] = temp;
	}
    sortedList.innerHTML = "";
    for (i = 0; i < n ; i+=1){
        if (copy[i] !== arr[i]){
	        var li = document.createElement("li");
	        li.innerHTML = arr[i]+",";
	        li.style.color = "red";
	    }
	    else{
	        var li = document.createElement("li")
	        li.innerHTML = arr[i]+",";
	    }
	    sortedList.insertAdjacentHTML("beforeEnd", li.outerHTML)
	}
}

function ResetCount() {
    var sortedList = document.getElementById("sorted-list");
    clickCount = 0
    sortedList.innerHTML = "";
    for (var i=0; i < arr.legth; i++){
        var li = document.createElement("li");
        li.innerHTML = "";
    }
}