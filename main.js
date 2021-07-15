var name_of_the_guest_array = [];
function submit() {
    var guest_name = document.getElementById("name1").value;
    name_of_the_guest_array.push(guest_name);
    document.getElementById("display_names").innerHTML = name_of_the_guest_array;
    console.log(name_of_the_guest_array);
}
function show() {
    var i = name_of_the_guest_array.join("<br>");
    console.log(name_of_the_guest_array);
    document.getElementById("p1").innerHTML = i.toString();
}
function sorting() {
    name_of_the_guest_array.sort();
    var i= name_of_the_guest_array;
    document.getElementById("sorted").innerHTML = i.toString();
}
function searching() {
    var s= document.getElementById("s1").value;
    var found=0;
    var j;
    for(j=0; j<names_of_people.length; j++)
        {
            if(s==names_of_people[j]){
                found=found+1
            }
        }
    document.getElementById("p2").innerHTML="name found "+found+" time/s";
    console.log("found name "+found+"time/s")
}