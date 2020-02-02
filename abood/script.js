///get updated time
$(document).ready(function () {
    const now = moment().format("MMMM Do, YYYY");

    let $dateHeading = $("#navbar-subtitle");
    $dateHeading.text(now);
});

