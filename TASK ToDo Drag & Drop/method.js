let items = document.getElementsByClassName("item");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");

updateCount(b1, '#c1');
updateCount(b2, '#c2');
updateCount(b3, '#c3');
updateCount(b4, '#c4');
updateCount(b5, '#c5');

//function add tasks
function addTasks() {
    const name = document.getElementById("title").value;
    let newItem = document.createElement("div");
    newItem.className = "item";

    newItem.draggable = true;
    newItem.textContent = name;
    b1.appendChild(newItem);
    console.log(items);
    newItem.addEventListener("dragstart", function (e) {
        let selected = e.target;

        [b1, b2, b3, b4, b5].forEach(block => {
            block.addEventListener("dragover", function (e) {
                e.preventDefault();
            });

            block.addEventListener("drop", function (e) {
                e.preventDefault();
                if (selected instanceof Node) {
                    block.appendChild(selected);
                    selected = null;
                }
            });
        });
    });
    b1.appendChild(newItem);
}





// drap and drop 
for (let item of items) {
    item.addEventListener("dragstart", function (e) {
        let selected = e.target;

        // drag & drop to block to do
        b1.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
        b1.addEventListener("drop", function (e) {
            e.preventDefault();
            if (selected instanceof Node) {
                b1.appendChild(selected);
                selected = null;

            }

        });
        // drag & drop to block in progress
        b2.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
        b2.addEventListener("drop", function (e) {
            e.preventDefault();
            if (selected instanceof Node) {
                b2.appendChild(selected);
                selected = null;
            }
        });
        // drag & drop to block backlog
        b3.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
        b3.addEventListener("drop", function (e) {
            e.preventDefault();
            if (selected instanceof Node) {
                b3.appendChild(selected);
                selected = null;
            }
        });
        // drag & drop to block deleted
        b4.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
        b4.addEventListener("drop", function (e) {
            e.preventDefault();
            if (selected instanceof Node) {
                b4.appendChild(selected);
                selected = null;
            }
        });
        // drag & drop to block finish
        b5.addEventListener("dragover", function (e) {
            e.preventDefault();
        });
        b5.addEventListener("drop", function (e) {
            e.preventDefault();
            if (selected instanceof Node) {
                b5.appendChild(selected);
                selected = null;
            }
        });

    });

}


// fonction qui met à jour le compteur
function updateCount(block, title) {
    document.addEventListener('mousemove', () => {
        let count = block.querySelectorAll(".item").length;
        let span = block.querySelector(title);
        span.innerText = count;
    })
}






