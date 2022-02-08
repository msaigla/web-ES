let words = {
    "void": "#30d5c8",
    "OUTPUT": "#30d5c8",
    "INPUT": "#30d5c8",
    "#include": "#bebd7f",
    "setup": "#bebd7f",
    "while": "#bebd7f",
    "for": "#bebd7f",
    "loop": "#bebd7f"
}

function color_codes(code) {
    console.log(code);
    code = code.replaceAll(" ", "&#160;");
    code = code.replaceAll("<", "&lt;");
    code = code.replaceAll(">", "&gt;");
    for (var key in words) {
        code = code.replaceAll(key, "<font color=\"" + words[key] + "\">" + key + "</font>");
    }
    code = code.replaceAll("\n", "<br>");
    return code;
}