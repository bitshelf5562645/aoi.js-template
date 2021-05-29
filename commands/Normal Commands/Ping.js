module.exports.command = ({
	name: 'ping',
	code: `$title[Main server ping!]
$description[$addfield[🕔| **Uptime:**; $uptime.;no]

$addfield[** **;** **;yes]

$addfield[⚡️| **Websocket ping:**;$divide[$ping;1000] seconds.;yes]

$addfield[⌛️| **Message ping:**;$divide[$botping;1000] seconds.;yes]

$addfield[** **;** **;yes]

$addfield[⚙️| **CPU usage:**;$cpu%.;yes]

$addfield[⚙️| **RAM usage:**;$ram MB.;yes]]
$color[$getServerVar[color]]
$thumbnail[$useravatar[$clientid]]
`
});