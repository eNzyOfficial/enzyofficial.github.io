let commands = {
    about: {
        callback: function(args) {
            return "<br>My name is Carl Knowles, I'm a backend PHP developer from Hertfordshire currently living in Stoke-on-Trent. If I'm not developing or tinkering with my machine, I'm playing video games and perusing reddit. I am an avid linux user, Arch being my distro of choice, along side i3 as my WM.<br><br>"+
            "For two years, I worked as the lead developer for the CS:GO subreddit, during this period I built the theme and a bot to dynamically display an assortment of information via various APIs. The theme was eventually transferred to Dota 2 and is now seen by 8 million unique viewers every month and counting.<br><br>"+
            "I spent a year working for EU Automation as a developer, working on a range of projects from their website and their CRM to writting an API and a flexible Ads system to utilize services like Adwords, Baidu and Bing.<br><br>"+
            "As an avid Linux user, I have written various scripts and programs to enhance my desktop experience, a TTY style login manager, several scripts to help optimize i3 window manager into a more efficient workflow and a number of other small projects which has deepened my knowledge of computers and how they work on a lower level.<br><br>";
        }
    },
    skills: {
        callback: function(args) {
            return "<br><span class='stdout-white'>laravel</span>&nbsp;&nbsp;&nbsp;&nbsp;[====================================&nbsp;&nbsp;&nbsp;&nbsp;]&nbsp;<span class='stdout-white'>90%</span><br>"+
            "<span class='stdout-white'>php</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[==================================&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]&nbsp;<span class='stdout-white'>85%</span><br>"+
            "<span class='stdout-white'>mysql</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[==============================&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]&nbsp;<span class='stdout-white'>75%</span><br>"+
            "<span class='stdout-white'>html</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[========================================]&nbsp;<span class='stdout-white'>100%</span><br>"+
            "<span class='stdout-white'>css</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[====================================&nbsp;&nbsp;&nbsp;&nbsp;]&nbsp;<span class='stdout-white'>90%</span><br>"+
            "<span class='stdout-white'>javascript</span>&nbsp;[========================&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]&nbsp;<span class='stdout-white'>60%</span><br>"+
            "<span class='stdout-white'>photoshop</span>&nbsp;&nbsp;[==================================&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]&nbsp;<span class='stdout-white'>85%</span><br>"+
            "<span class='stdout-white'>python</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[====================&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]&nbsp;<span class='stdout-white'>50%</span><br><br>";
        }
    },
    links: {
        callback: function(args) {
            return "<br><a href='https://www.linkedin.com/in/enzyofficial/' target='_blank'>linkedin</a><br>"+
            "<a href='https://github.com/enzyofficial' target='_blank'>github</a><br>"+
            "<a href='https://reddit.com/u/enzyy' target='_blank'>reddit</a><br><br>";
        }
    },
    clear: {
        callback: function(args) {
            return this.output.innerHTML = '';
            return true;
        }
    },
    help: {
        callback: function(args) {
            let keys = this.commands.keys();
            let stdout = '';

            for (var i in keys) {
                if (keys[i] == 'motd') {
                    continue;
                }
                
                stdout += `${keys[i]}&emsp;&emsp;&emsp;`;
            };

            return stdout + "<br>";
        }
    },
    motd: {
        callback: function(args) {
            return "<br>&nbsp;▄████▄&nbsp;&nbsp;&nbsp;▄▄▄&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██▀███&nbsp;&nbsp;&nbsp;██▓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██&nbsp;▄█▀&nbsp;███▄&nbsp;&nbsp;&nbsp;&nbsp;█&nbsp;&nbsp;▒█████&nbsp;&nbsp;&nbsp;█&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;█░&nbsp;██▓&nbsp;&nbsp;&nbsp;&nbsp;▓█████&nbsp;&nbsp;&nbsp;██████<br>"+
            "▒██▀&nbsp;▀█&nbsp;&nbsp;▒████▄&nbsp;&nbsp;&nbsp;&nbsp;▓██&nbsp;▒&nbsp;██▒▓██▒&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;██▄█▒&nbsp;&nbsp;██&nbsp;▀█&nbsp;&nbsp;&nbsp;█&nbsp;▒██▒&nbsp;&nbsp;██▒▓█░&nbsp;█&nbsp;░█░▓██▒&nbsp;&nbsp;&nbsp;&nbsp;▓█&nbsp;&nbsp;&nbsp;▀&nbsp;▒██&nbsp;&nbsp;&nbsp;&nbsp;▒<br>"+
            "▒▓█&nbsp;&nbsp;&nbsp;&nbsp;▄&nbsp;▒██&nbsp;&nbsp;▀█▄&nbsp;&nbsp;▓██&nbsp;░▄█&nbsp;▒▒██░&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▓███▄░&nbsp;▓██&nbsp;&nbsp;▀█&nbsp;██▒▒██░&nbsp;&nbsp;██▒▒█░&nbsp;█&nbsp;░█&nbsp;▒██░&nbsp;&nbsp;&nbsp;&nbsp;▒███&nbsp;&nbsp;&nbsp;░&nbsp;▓██▄<br>"+
            "▒▓▓▄&nbsp;▄██▒░██▄▄▄▄██&nbsp;▒██▀▀█▄&nbsp;&nbsp;▒██░&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▓██&nbsp;█▄&nbsp;▓██▒&nbsp;&nbsp;▐▌██▒▒██&nbsp;&nbsp;&nbsp;██░░█░&nbsp;█&nbsp;░█&nbsp;▒██░&nbsp;&nbsp;&nbsp;&nbsp;▒▓█&nbsp;&nbsp;▄&nbsp;&nbsp;&nbsp;▒&nbsp;&nbsp;&nbsp;██▒<br>"+
            "▒&nbsp;▓███▀&nbsp;░&nbsp;▓█&nbsp;&nbsp;&nbsp;▓██▒░██▓&nbsp;▒██▒░██████▒&nbsp;&nbsp;&nbsp;▒██▒&nbsp;█▄▒██░&nbsp;&nbsp;&nbsp;▓██░░&nbsp;████▓▒░░░██▒██▓&nbsp;░██████▒░▒████▒▒██████▒▒<br>"+
            "░&nbsp;░▒&nbsp;▒&nbsp;&nbsp;░&nbsp;▒▒&nbsp;&nbsp;&nbsp;▓▒█░░&nbsp;▒▓&nbsp;░▒▓░░&nbsp;▒░▓&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;▒&nbsp;▒▒&nbsp;▓▒░&nbsp;▒░&nbsp;&nbsp;&nbsp;▒&nbsp;▒&nbsp;░&nbsp;▒░▒░▒░&nbsp;░&nbsp;▓░▒&nbsp;▒&nbsp;&nbsp;░&nbsp;▒░▓&nbsp;&nbsp;░░░&nbsp;▒░&nbsp;░▒&nbsp;▒▓▒&nbsp;▒&nbsp;░<br>"+
            "&nbsp;&nbsp;░&nbsp;&nbsp;▒&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▒&nbsp;&nbsp;&nbsp;▒▒&nbsp;░&nbsp;&nbsp;░▒&nbsp;░&nbsp;▒░░&nbsp;░&nbsp;▒&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;░&nbsp;░▒&nbsp;▒░░&nbsp;░░&nbsp;&nbsp;&nbsp;░&nbsp;▒░&nbsp;&nbsp;░&nbsp;▒&nbsp;▒░&nbsp;&nbsp;&nbsp;▒&nbsp;░&nbsp;░&nbsp;&nbsp;░&nbsp;░&nbsp;▒&nbsp;&nbsp;░&nbsp;░&nbsp;░&nbsp;&nbsp;░░&nbsp;░▒&nbsp;&nbsp;░&nbsp;░<br>"+
            "░&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;▒&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;░░&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;░&nbsp;░&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;░&nbsp;░░&nbsp;░&nbsp;&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;░&nbsp;░&nbsp;░&nbsp;░&nbsp;░&nbsp;▒&nbsp;&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;&nbsp;░&nbsp;░&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;░&nbsp;&nbsp;░<br>"+
            "░&nbsp;░&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;░&nbsp;░&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;░&nbsp;&nbsp;░&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;░<br>"+
            "░<br><br>";
        }
    }
}