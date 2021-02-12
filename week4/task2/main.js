
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }
    function darkTheme() {
        if (localStorage.getItem('theme') === 'theme-light') {
            setTheme('theme-dark');
            click.innerText = "Dark Theme Off";
        } else {
            setTheme('theme-light');
            click.innerText = "Dark Theme On";
        }
    }