$(document).ready(function() {
    var options = {
        navigationSkip: false,
        pagination: true,
        showPaginationOnInit: false,
        hashTags: true
    };

    var sequence = $("#sequence").sequence(options).data("sequence");
});