let spam = {
    contain: function (str) {
        let str3 = str.toLowerCase();
        let searchSpam = str3.search("spam");
        // let commonLength = str.length - 4;
        // let commonLength2 = commonLength1 - 1;
        let str2 = str.indexOf("m", searchSpam);
        let str1 = str.slice(searchSpam, str2 + 1);
        if (str.includes(str1)) {
            // let str1 = "***";
            // str = str.replace("spam", "***")
            alert(str.replace(str1, "***"));
        }
        else {
            alert("Error!");
        }
    },
};

spam.contain(prompt("Введите строку"));