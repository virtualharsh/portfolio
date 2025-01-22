export const ifStartsWithCommand = (cmds,cmd)=>{
    if (cmd === "") {
        return "";
    }
    if(cmd === "\t"){
        return "tab"
    }
    const matches = cmds.filter(option => option.startsWith(cmd));
    return (matches.length > 0 ? matches[0] : "");
}