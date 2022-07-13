var docs = [
{path:"class/Funscript.html", type:"class", title:"Funscript", text:"Funscript returned by ofs.Script()"},
{path:"class/Action.html", type:"class", title:"Action", text:"Action returned by Action.new()"},
{path:"class/Process.html", type:"class", title:"Process", text:"Process handle returned by Process.new() If the handle goes out of scope the process may get killed. (This is not guaranteed) Example"},
{path:"module/ofs.html", type:"module", title:"ofs", text:"Core functions"},
{path:"module/player.html", type:"module", title:"player", text:"Player functions"},
{path:"module/action.html", type:"module", title:"action", text:"Action creation"},
{path:"module/process.html", type:"module", title:"process", text:"Process creation"},
{path:"module/player.html#player.playbackSpeed", type:"field", title:"player.playbackSpeed", text:"Control playback speed The value is automatically clamped between 0.05 minimum speed and 3.0 maximum speed"},
{path:"class/Funscript.html#Funscript.actions", type:"field", title:"Funscript.actions", text:"Array of actions"},
{path:"class/Funscript.html#Funscript.path", type:"field", title:"Funscript.path", text:"Default save path"},
{path:"class/Funscript.html#Funscript.name", type:"field", title:"Funscript.name", text:"Name of the script"},
{path:"class/Action.html#Action.at", type:"field", title:"Action.at", text:"Time in seconds"},
{path:"class/Action.html#Action.pos", type:"field", title:"Action.pos", text:"Position (0 - 100)"},
{path:"class/Action.html#Action.selected", type:"field", title:"Action.selected", text:"Is selected"},
{path:"module/ofs.html#print", type:"function", title:"print", text:"Print to the extension log. Takes a variable amount of arguments strings and numbers. Example"},
{path:"module/ofs.html#clamp", type:"function", title:"clamp", text:"Clamp a value"},
{path:"module/ofs.html#ofs.Version", type:"function", title:"ofs.Version", text:"Get the API version"},
{path:"module/ofs.html#ofs.ExtensionDir", type:"function", title:"ofs.ExtensionDir", text:"Get the extension directory path"},
{path:"module/ofs.html#ofs.ScriptCount", type:"function", title:"ofs.ScriptCount", text:"Get the currently loaded script count"},
{path:"module/ofs.html#ofs.ScriptName", type:"function", title:"ofs.ScriptName", text:"Get the script name"},
{path:"module/ofs.html#ofs.ActiveIdx", type:"function", title:"ofs.ActiveIdx", text:"Gets the index of the currently active script"},
{path:"module/ofs.html#ofs.Script", type:"function", title:"ofs.Script", text:"Get a currently loaded script Example"},
{path:"module/ofs.html#ofs.Clipboard", type:"function", title:"ofs.Clipboard", text:"Get a read-only version of the clipboard"},
{path:"module/ofs.html#ofs.Undo", type:"function", title:"ofs.Undo", text:"Undo the last modification This function can only undo modifications done by a Lua extension."},
{path:"module/ofs.html#ofs.Text", type:"function", title:"ofs.Text", text:"Display text"},
{path:"module/ofs.html#ofs.Button", type:"function", title:"ofs.Button", text:"Create a button Example"},
{path:"module/ofs.html#ofs.Input", type:"function", title:"ofs.Input", text:"Create an input field Example"},
{path:"module/ofs.html#ofs.InputInt", type:"function", title:"ofs.InputInt", text:"Create an input field"},
{path:"module/ofs.html#ofs.Drag", type:"function", title:"ofs.Drag", text:"Create a numeric drag input"},
{path:"module/ofs.html#ofs.DragInt", type:"function", title:"ofs.DragInt", text:"Create a numeric integer drag input"},
{path:"module/ofs.html#ofs.Slider", type:"function", title:"ofs.Slider", text:"Create a numeric slider"},
{path:"module/ofs.html#ofs.SliderInt", type:"function", title:"ofs.SliderInt", text:"Create a numeric integer slider"},
{path:"module/ofs.html#ofs.Checkbox", type:"function", title:"ofs.Checkbox", text:"Create a checkbox"},
{path:"module/ofs.html#ofs.Combo", type:"function", title:"ofs.Combo", text:"Create a combobox"},
{path:"module/ofs.html#ofs.SameLine", type:"function", title:"ofs.SameLine", text:"Put next control on the same line as the previous Example"},
{path:"module/ofs.html#ofs.Separator", type:"function", title:"ofs.Separator", text:"Insert a separator"},
{path:"module/ofs.html#ofs.NewLine", type:"function", title:"ofs.NewLine", text:"Insert a new line between controls Example"},
{path:"module/ofs.html#ofs.Tooltip", type:"function", title:"ofs.Tooltip", text:"Create a tooltip Example"},
{path:"module/ofs.html#ofs.BeginDisabled", type:"function", title:"ofs.BeginDisabled", text:"Begin disabled area Example"},
{path:"module/ofs.html#ofs.EndDisabled", type:"function", title:"ofs.EndDisabled", text:"End disabled area"},
{path:"module/player.html#player.CurrentTime", type:"function", title:"player.CurrentTime", text:"Get the current time in the video"},
{path:"module/player.html#player.Seek", type:"function", title:"player.Seek", text:"Seek to time"},
{path:"module/player.html#player.Duration", type:"function", title:"player.Duration", text:"Get the duration"},
{path:"module/player.html#player.Play", type:"function", title:"player.Play", text:"Control playback"},
{path:"module/player.html#player.IsPlaying", type:"function", title:"player.IsPlaying", text:"Gets if the player is playing"},
{path:"module/player.html#player.CurrentVideo", type:"function", title:"player.CurrentVideo", text:"Gets the path to the current video"},
{path:"module/player.html#player.FPS", type:"function", title:"player.FPS", text:"Get the FPS of the video"},
{path:"class/Funscript.html#Funscript.hasSelection", type:"function", title:"Funscript:hasSelection", text:"Gets if the script has a selection"},
{path:"class/Funscript.html#Funscript.commit", type:"function", title:"Funscript:commit", text:"Commit the changes"},
{path:"class/Funscript.html#Funscript.sort", type:"function", title:"Funscript:sort", text:"Sort the actions array"},
{path:"class/Funscript.html#Funscript.closestAction", type:"function", title:"Funscript:closestAction", text:"Get the closest action to a given time"},
{path:"class/Funscript.html#Funscript.closestActionAfter", type:"function", title:"Funscript:closestActionAfter", text:"Get the closest action after a given time"},
{path:"class/Funscript.html#Funscript.closestActionBefore", type:"function", title:"Funscript:closestActionBefore", text:"Get the closest action before a given time"},
{path:"class/Funscript.html#Funscript.selectedIndices", type:"function", title:"Funscript:selectedIndices", text:"Get an array of selected indices into the actions array"},
{path:"class/Funscript.html#Funscript.markForRemoval", type:"function", title:"Funscript:markForRemoval", text:"Mark an action for removal Example"},
{path:"class/Funscript.html#Funscript.removeMarked", type:"function", title:"Funscript:removeMarked", text:"Remove all marked actions"},
{path:"module/action.html#Action.new", type:"function", title:"Action.new", text:"Create a new action"},
{path:"module/process.html#Process.new", type:"function", title:"Process.new", text:"Create a new process"},
{path:"class/Process.html#Process.alive", type:"function", title:"Process:alive", text:"Is the process alive"},
{path:"class/Process.html#Process.join", type:"function", title:"Process:join", text:"Join the process (blocking)"},
{path:"class/Process.html#Process.detach", type:"function", title:"Process:detach", text:"Detach the process letting it run freely"},
{path:"class/Process.html#Process.kill", type:"function", title:"Process:kill", text:"Kill the process"},
{path:"module/ofs.html#funscript", type:"section", title:"Funscript", text:""},
{path:"module/ofs.html#gui", type:"section", title:"GUI", text:"All of these functions must be called from within the gui() function."},
{path:"index.html#how_to_create_an_extension", type:"section", title:"How to create an extension", text:"How to create an extension Extension Structure Keybindings Custom UI"},
{path:"index.html#extension_structure", type:"section", title:"Extension Structure", text:"Extension live in the %appdata%/OFS2_data/extensions/ directory. An extension must have it's own directory with a main.lua in it. By default there is a Core extension which serves as a demo. In OFS extensions become available trough the main menu bar Extensions and must be enabled before they can be used. The main.lua must define three functions otherwise it just won't work. A new optional function which can be defined is scriptChange(scriptIdx)."},
{path:"index.html#keybindings", type:"section", title:"Keybindings", text:"Keybindings are created by adding them to a global binding table *before* init() is called. This must be done in global scope."},
{path:"index.html#custom_ui", type:"section", title:"Custom UI", text:"GUI functions must be called from within the gui() function. A list of functions can be found here. You can't pass values by reference in Lua which is why things like ofs.Slider have multiple return values. *When using multiple controls with the same name you have to give them a unique id.* <br>This applies to all controls not just buttons."},
];