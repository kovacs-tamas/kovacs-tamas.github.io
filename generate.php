<?php

$phones = [
    'Alcatel OT 302',
    'Alcatel OT 511',
    'Alcatel OT 715',
    'Alcatel OT DB',
    'Ericsson R320',
    'Ericsson T18',
    'Ericsson T20',
    'Ericsson T65',
    'Ericsson T68e',
    'Nexus 5',
    'HTC Desire',
    'HTC Sensation',
    'Huawei P10',
    'Apple iPhone 3GS',
    'Apple iPhone 5S',
    'Apple iPhone 6',
    'Apple iPhone 6s',
    'Apple iPhone 8',
    'Apple iPhone XS',
    'Apple iPhone 12 Pro',
    'Apple iPhone 13 Pro',
    'Motorola C336',
    'Motorola V300',
    'Nokia 6500 Classic',
    'Nokia 3100',
    'Nokia 3210',
    'Nokia 3310',
    'Nokia 3510',
    'Nokia 3650',
    'Nokia 6100',
    'Nokia 6210',
    'Nokia 6230',
    'Nokia 6230i',
    'Nokia 6234',
    'Nokia 6300',
    'Nokia 6310',
    'Nokia 6310i',
    'Nokia 6600',
    'Nokia 6610',
    'Nokia 7110',
    'Nokia 7250',
    'Nokia 8210',
    'Pixel 2',
    'Pixel 3a',
    'Samsung Black Jack',
    'Samsung Corby',
    'Samsung Galaxy S3',
    'Samsung Galaxy S6',
    'Samsung Galaxy S7',
    'Samsung X480',
    'Sharp 550SH',
    'Siemens C55',
    'Siemens C65',
    'Siemens M35',
    'Siemens M55',
    'Siemens MC60',
    'Siemens MT50',
    'Siemens S25',
    'Siemens S45',
    'Siemens S55',
    'Siemens SL45',
    'Siemens ST55',
    'Sony Ericsson K508i',
    'Sony Ericsson K750',
    'Sony Ericsson T100',
    'Sony Ericsson T610',
    'Sony J70',
    'Trium Mars',
];



ini_set('display_errors', 0);

$quitDate = '2013-11-30 09:00:00';
$cigarettes = 38;
$cigarettePrice = 920 / 19;
$timeBetweenCigarettes = (60 * 60 * 24) / $cigarettes;
$quitTime = strtotime($quitDate);
$elapsedTime = time() - $quitTime;
$daysWithoutSmoking = $elapsedTime / (60 * 60 * 24);
$nonSmokedCigarettes = $elapsedTime / $timeBetweenCigarettes;
$moneySaved = $nonSmokedCigarettes * $cigarettePrice;

$dietDays = (time() - strtotime('2017-07-06 09:00:00')) / (60 * 60 * 24);
$originalWeight = 92;
$newWeight = 78.8;
$lostKilos = $originalWeight - $newWeight;
$weightGoal = 76;
$kilosToLose = $newWeight - $weightGoal;
function countBackTheYears($startYear)
{
    $currentYear = date('Y');
    print $currentYear - $startYear;
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Tamas Kovacs - Senior JavaScript Engineer at delodi</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!-- Chrome, Firefox OS and Opera -->
    <meta name="theme-color" content="#898989">
    <!-- Windows Phone -->
    <meta name="msapplication-navbutton-color" content="#898989">
    <!-- iOS Safari -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#898989">
    <link rel="stylesheet" href="/assets/style.css" media="screen" type="text/css" />
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0" />
    <meta name="apple-itunes-app" content="app-id=1558296045">
</head>

<body id="egon">
    <nav>
        <a class="button linkedin rounded-10" href="https://www.linkedin.com/in/kovacs-tamas/" target="_blank" title="LinkedIn">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="430.117px" height="430.117px" viewBox="0 0 430.117 430.117">
                <path class="logo" d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707 c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21 v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824 C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463 c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z M5.477,420.56h92.184v-277.32H5.477V420.56z" />
            </svg>
        </a>

        <a class="button github rounded-10" href="https://github.com/kovacs-tamas" target="_blank" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="512px" height="512px" viewBox="0 0 578.305 578.305">
                <path d="M533.32,160.379c0.532-26.518-5.294-53.33-10.024-79.731c-1.628-9.088-4.927-17.87-8.177-26.487    c-2.448-6.487-9.676-10.618-16.334-9.198c-4.309,0.918-8.183,1.812-11.94,3.048c-39.327,12.938-75.741,31.86-110.723,53.844    c-4.7,2.95-11.536,4.015-17.21,3.599c-13.574-0.992-27.001-4.37-40.569-5.013c-33.58-1.591-67.093-0.569-100.368,5.251    c-4.626,0.808-10.716,0.012-14.559-2.472C165.27,78.537,125.582,57.411,80.937,45.55c-6.702-1.781-13.599-0.838-15.294,1.824    c-1.035,1.628-1.971,3.317-2.485,5.128c-4.823,16.946-10.539,33.807-13.342,51.114c-3.341,20.655-6.554,41.935-4.969,62.565    c0.998,12.968-2.583,20.937-9.669,30.037C11.407,226.757,0.703,261.861,0.048,300.35c-0.563,32.919,3.794,65,13.819,96.47    c15.355,48.219,45.006,84.406,89.652,107.95c36.708,19.357,76.708,26.818,117.639,28.256c36.892,1.292,73.856,0.196,110.79,0.404    c37.021,0.208,73.532-3.091,108.948-14.633c35.447-11.549,66.121-30.184,89.922-59.486    c34.376-42.326,45.079-92.186,47.276-144.965c1.684-40.361-6.542-78.329-30.178-111.347    C538.332,189.603,532.959,178.097,533.32,160.379z M462.047,469.641c-15.876,13.728-35.288,20.227-55.16,24.976    c-38.99,9.315-78.69,11.635-118.519,9.896c-39.37,1.707-78.287-0.747-116.592-9.762c-28.256-6.646-54.052-17.821-72.032-42.075    c-28.611-38.599-35.924-112.057,11.353-152.148c12.056-10.221,25.502-16.708,41.39-17.717c17.534-1.12,35.074-3.305,52.595-3.097    c44.199,0.526,88.378,2.724,132.571,3.054c20.184,0.146,40.509-4.56,60.545-3.348c18.207,1.102,37.351,4.455,53.875,11.781    c27.546,12.215,42.374,36.983,46.854,65.992C505.597,400.326,496.796,439.586,462.047,469.641z" class="logo" />
                <ellipse cx="390.026" cy="385.552" rx="42.124" ry="56.298" class="logo" />
                <ellipse cx="189.028" cy="385.552" rx="42.13" ry="56.298" class="logo" />
            </svg>
        </a>

        <a class="button medium rounded-10" href="https://medium.com/@tamaskovacs" target="_blank" title="Medium">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve" width="48" height="48">
                <path style="fill:#D0D0D0;" d="M32.163,6.369C31.523,6.049,31,6.372,31,7.088v28.45l11.674,5.837&#10;&#9;C43.959,42.017,45,41.567,45,40.37V12.974c0-0.115-0.065-0.22-0.167-0.271L32.163,6.369z" />
                <path style="fill:#A1A1A1;" d="M17,28.537L30.319,6.895c0.375-0.609,1.205-0.846,1.844-0.526l12.684,6.342&#10;&#9;c0.082,0.041,0.111,0.144,0.063,0.222L31,35.537L17,28.537z" />
                <path style="fill:#808080;" d="M4.938,6.756C3.872,6.223,3.511,6.618,4.136,7.633L17,28.537l14,7L17.03,12.836&#10;&#9;c-0.02-0.032-0.048-0.058-0.082-0.075L4.938,6.756z" />
                <path style="fill:#575757;" d="M17,40.37c0,1.192-0.872,1.731-1.938,1.198L4.163,36.119&#10;&#9;C3.523,35.799,3,34.952,3,34.237V7.521c0-0.954,0.698-1.385,1.551-0.958l12.374,6.187C16.971,12.773,17,12.82,17,12.871V40.37z" />
            </svg>
        </a>

    </nav>

    <section>
        <h1>Tamás Kovács</h1>
        <h2><em>pronounced = tamash kovatsch<em></h2>
        <article class="shadowed rounded-10">
            <h3>My skills</h3>
            <strong class="level8">Git</strong>, <strong class="level7">SVN</strong> = <strong><?php countBackTheYears(2014); ?>, <?php countBackTheYears(2006); ?></strong> years<br>
            <strong class="level9">PHP OOP, Bash</strong> = <strong><?php countBackTheYears(2004); ?></strong> years<br>
            <strong class="level8">HTML, CSS, Javascript</strong> = <strong><?php countBackTheYears(2001); ?>, <?php countBackTheYears(2001); ?>, <?php countBackTheYears(2002); ?></strong> years<br>
            <strong class="level5">Ext JS</strong>, <strong class="level7">jQuery</strong>, <strong class="level10">Angular JS</strong> = <strong><?php countBackTheYears(2007); ?>, <?php countBackTheYears(2007); ?>, <?php countBackTheYears(2013); ?></strong> years<br>
            <strong class="level9">React</strong>, <strong class="level8">React-Native</strong> = <strong> <?php countBackTheYears(2015); ?>, <?php countBackTheYears(2016); ?></strong> years<br>
            <strong class="level9">Ionic Framework, Cordova</strong> = <strong><?php countBackTheYears(2014); ?></strong> years<br />
            <strong>Speaks</strong> <strong class="level6">English (6)</strong>, <strong class="level7">German (7)</strong>, <strong class="level10">Hungarian (10)</strong>
        </article>

        <article class="shadowed personal rounded-10" id="Mobiles">
            <h3>Oh my good, i had <?php print count($phones); ?> phones in <?php countBackTheYears(2000) ?> years :D</h3>
            <p>Here is a list about phones i had before. I owned some devices more times :)</p>
            <ol>

                <?php

                foreach ($phones as $phone) {
                    print '<li><a target="_blank" href="https://www.google.com/search?q=' . str_replace(' ', '+', $phone)  . '">' . $phone  . "</a></li>\n";
                }

                ?>

            </ol>
        </article>

        <img src="/assets/tamas.jpg" class="tamas shadowed" alt="Tamas Kovacs">
        <footer>
            <a href="/">Home</a> -
            <a href="privacy.html">Datenschutz</a>
        </footer>
    </section>
    <script>
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-51481326-1', 'auto');
        ga('require', 'displayfeatures');
        ga('send', 'pageview');
    </script>
</body>

</html>