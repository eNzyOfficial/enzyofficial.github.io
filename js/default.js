class utils {
    isEmpty(value) {
        if (['', null, 'null', undefined, 'undefined'].includes(value)) {
            return true;
        }

        if (value instanceof Array) {
            return value.length === 0;
        } else if (value.constructor.name == 'object') {
            for (var property in value) {
                if (value.hasOwnProperty(property)) {
                    return false;
                }
            }

            return true;
        }
    }

    isFunction(value) {
        return (typeof value == 'function');
    }

    hasProperty(object, property) {
        if (this.isEmpty(object)) {
            return false;
        }

        return object.hasOwnProperty(property);
    }

    arrayOfObjectsHasKeyValue(arrayOfObjects, key, value) {
        let result = arrayOfObjects.filter(function (obj) {
            return obj[key] == value;
        });

        if (result.length > 0) {
            return result[0];
        }

        return false;
    }
}


class commandHandler {
    constructor(commands, utils) {
        this.utils = utils;
        
        if (this.utils.isEmpty(commands) || typeof commands != 'object') {
            throw 'Commands must be an object and must not be empty!';
        }

        this.commands = commands;
    }

    keys() {
        return Object.keys(this.commands);
    }

    exists(property) {
        return this.utils.hasProperty(this.commands, property) &&
            this.utils.hasProperty(this.commands[property], 'callback') &&
            this.utils.isFunction(this.commands[property].callback);
    }

    get(property) {
        return this.commands[property];
    }

    set(property, object) {
        if (this.utils.isEmpty(object)) {
            throw 'Can not set empty';
        }

        if (!this.utils.hasProperty(object, 'callback') || !this.utils.isFunction(object.callback)) {
            throw 'Can not set without a callback function';
        }

        this.commands[property] = object;
    }

    remove(property) {
        delete this.commands[property];
    }
}


class terminal {
    constructor(commandHandler, utils) {
        // Set up history
        this.history = [];
        this.history_index = 0;

        // Set up input handlers and focus
        this.input = document.getElementById('stdin');
        this.input.addEventListener('keypress', this._keypress.bind(this));
        this.input.addEventListener('keydown', this._keydown.bind(this));
        this.input.addEventListener('keyup', this._keyup.bind(this));
        this.input.focus();

        // Misc stuff
        this.utils = utils;

        // Set up output handlers
        this.output = document.getElementById('stdout');
        this.prompt = "cpk.cx $\xa0"



        // Make sure we always focus the input
        window.addEventListener('click', function (e) {
            this.input.focus();
        }.bind(this));

        // Init command handler
        this.commands = commandHandler;
        
        if (this.commands.exists('motd')) {
            this.stdout(this.commands.get('motd').callback());
        }
    }

    call(command) {
        // Add to history
        this.history.unshift(command);
        this.stdout(`<span class="stdout-white">${this.prompt}</span>${command}<br>`);

        // Separate command from args
        let args = command.split(' ');
        command = args.shift();

        // Check command exists, otherwise bottom out
        if (!this.commands.exists(command)) {
            this.stderr(`bash: command not found: ${command}`);
            return false;
        }

        // Call the command
        let cmd = this.commands.get(command);
        let callback = cmd.callback.bind(this);
        let response = callback(args);

        if (response !== true) {
            this.stdout(response);
        }

        return true;
    }

    stdin() {
        return this.input.value;
    }

    stdout(msg) {
        this.output.innerHTML += msg;
    }

    stderr(msg) {
        this.output.innerHTML += `<span class="stdout-red">${msg}</span><br>`;
    }

    clear() {
        this.input.value = '';
        this.history_index = 0;
    }

    autocomplete(input) {
        let keys = this.commands.keys();
        let suggestions = [];

        keys.forEach(function (key) {
            if (key.substr(0, input.length) == input) {
                suggestions.push(key);
            }
        });

        return suggestions;
    }

    set_history() {
        this.input.value = this.history_index == 0 ? '' : this.history[this.history_index - 1];
        this.input.focus();
    }

    _keypress(e) {
        if (e.which == 13) { // Enter
            let stdin = this.stdin();

            if (!this.utils.isEmpty(stdin)) {
                this.call(stdin);
                this.clear();
            }
            else {
                this.stdout(`<span class="stdout-white">${this.prompt}</span><br>`);
            }

            let wrapper = document.getElementById('terminal');
            wrapper.scrollTop = wrapper.scrollHeight;
            
            e.preventDefault();
        }
    }

    _keydown(e) {
        if (e.which == 9) { // Tab
            // TODO: Autocomplete
            let suggestions = this.autocomplete(this.stdin());

            if (!this.utils.isEmpty(suggestions)) {
                this.input.value = suggestions[0];
            }

            e.preventDefault();
        }

        if (e.ctrlKey && e.keyCode == 67) {
            this.input.value = '';
            this.history_index = 0;
            this.previous = null;
            e.preventDefault();
        }
    }

    _keyup(e) {
        if (e.keyCode == 38) { // Key up
            if (this.history_index < this.history.length) {
                this.history_index++;
                this.set_history();
            }

            e.preventDefault();
        } else if (e.keyCode == 40) { // Key down
            if (this.history_index >= 1) {
                this.history_index--;
                this.set_history();
            }

            e.preventDefault();
        }
    }
}












document.addEventListener("DOMContentLoaded", function () {
    var u = new utils();
    var ch = new commandHandler(commands, u);
    var tty = new terminal(ch, u);
});