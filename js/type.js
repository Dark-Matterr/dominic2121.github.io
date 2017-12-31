$("#terminal-typing").typeIt({
     speed: 200,
     autoStart: false,
     loop: true
})
.tiType('rem')
.tiPause(500)
.tiDelete(2)
.tiType('m  &nbsp;-rf')
.tiPause(500)
.tiType('  &nbsp;~')
.tiPause(2000)
.tiDelete(1)
.tiType('/var/www/html/index.php')
.tiPause(2000)
.tiEmpty();