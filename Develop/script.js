$(currentDay).text(moment().format("dddd, MMMM Do YYYY"));
let planner = [
    {
        id: "0",
        hour: "7",
        time: "7",
        meridiem: "am",
        reminder: "",

    },
    {
        id: "1",
        hour: "8",
        time: "8",
        meridiem: "am",
        reminder: "",

    },
    {
        id: "2",
        hour: "9",
        time: "9",
        meridiem: "am",
        reminder: "",

    },

    {
        id: "3",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: "",

    },
    {
        id: "4",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: "",

    },
    {
        id: "5",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: "",

    },
    {
        id: "6",
        hour: "13",
        time: "1",
        meridiem: "pm",
        reminder: "",

    },
    {
        id: "7",
        hour: "14",
        time: "2",
        meridiem: "pm",
        reminder: "",

    },
    {
        id: "8",
        hour: "15",
        time: "3",
        meridiem: "pm",
        reminder: "",

    },
];

var time = moment();

function planner() {
    $(".time-block").each(function () {

        var id = $(this).attr("id");
        var schedule =
            localStorage.getItem(id);
        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);

        }

    });
}
planner();

var saveButton = $(".saveButton");
saveButton.on("click", function () {

    var time = $("this").prarent().attr("id");
    var schedule =
        $(this).sbilings(".schedule").val();
    localStorage.setItem(time, schedule);


});
function timeline() {

    hour = time.hour();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));


        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}


timeline();









