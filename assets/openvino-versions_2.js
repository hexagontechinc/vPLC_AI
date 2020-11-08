"use strict";

/*
===========================================
CAUTION! GLOBAL-SCOPE variable declarations
===========================================
*/
// Define all versions in production!
var versions = JSON.parse(data);
// WHERE DOES THIS DOCUMENTATION LIVE?
var documentationHost = getDomainName();
// Regex to detect and active version, if any!
// Detects version in the form domain_name/VERSION/bla/bla/.../bla.html
var currentVersion = getCurrentVersion();
var latestVersion = versions[0].version === 'latest' ? versions[1].version : versions[0].version;;
// Get data out of the 'data' element generated by build process and stored
// in versions_raw.js, that file needs to load before this file
// First version in object is the latest version

// Define where we want the selector to go first in a version
var landingPage = "index.html";

/* Adobe Analytics */
var wapLocalCode = 'us-en';
var wapSection = 'openvinotoolkit';

(function () {
    if (window.location.protocol === 'file:') {
        return;
    }
    var host = (window.document.location.protocol == 'http:') ? "http://www.intel.com" : "https://www.intel.com";
    var url = host + "/content/dam/www/global/wap/tms-loader.js"; //wap file url
    var po = document.createElement('script');
    po.type = 'text/javascript'; po.async = true; po.src = url;
    var s = document.getElementsByTagName('head')[0];
    s.appendChild(po);
})();

function getDomainName() {
    var protocol = window.location.protocol + "//";
    var index = window.location.href.indexOf(protocol);
    var link = window.location.href.slice(index + protocol.length);
    return encodeURI(protocol + link.split('/')[0]);
}

// Get current version from URL
function getCurrentVersion() {
    var protocol = window.location.protocol + "//";
    var index = window.location.href.indexOf(protocol);
    var link = window.location.href.slice(index + protocol.length).split('/');
    var wordAfterDomain = link[1];
    if (wordAfterDomain === 'cn') {
        wordAfterDomain = link[2];
    }
    if (["index.html", "404.html", "", "latest"].indexOf(wordAfterDomain) >= 0) {
        /*
        * If this landing page, 404 or domain.com we should get first version
        * */
        return versions[0].version;
    }
    return encodeURI(wordAfterDomain);
}

/**
 * Handle building the versions links, updating URLs on homepage, and managing
 * the versions selector.
 * @author Amplified - http://amplifiedbydesign.com/
 * @returns {object}
 */
function openVinoVersions() {


    /**
     * Initialize/do this on page load
     * @public
     */
    function init() {
        buildVersionsContent();
        addArchiveButton();
        addVersionNotification();
        addCookiesNotification();
        if ($("body").hasClass("homepage")) {
            updateAllLinks();
        }
        
    }

    function addVersionNotification() {
        if (['cn', 'latest', latestVersion].indexOf(currentVersion) === -1) {
            // Old Version notification
            var url = 'https://docs.openvinotoolkit.org/' + latestVersion + '/index.html';
            var txt = '<p>You are using documentation for older OpenVINO™ releases. ';
            txt += 'Please check the latest documentation available: <a href="' + url + '">';
            txt += url;
            txt += '</a></p>';
        }
    }

    function addCookiesNotification() {
        var ovino_cookies = localStorage.getItem('ovino_cookies');
        var accepted;
        try {
            accepted = JSON.parse(ovino_cookies).accepted;
        }
        catch (err) {
            accepted = false;
        }
        if (!accepted) {
            var txt = 'We use cookies to provide you with the best experience, and for measurement and analytics purposes. ';
            txt += 'By using our website, you agree to our use of cookies as described in our ';
            txt += '<a href="https://www.intel.com/content/www/us/en/privacy/intel-cookie-notice.html">Cookie Policy</a>.';
            var $message = $('<p/>', {'html': txt});
            var $acceptBtn = $('<button/>', {'text': 'ACCEPT'});
            $acceptBtn.click(function() {
                localStorage.setItem('ovino_cookies', JSON.stringify({'accepted': true}));
                $container.css('display', 'none');
            });
            var $container = $('<div/>', {'class': 'cookies-notification'});
            $container.append($message);
            $message.append($acceptBtn);
            var $optNotice = $('div.opt-notice-wrapper');
            if ($optNotice.length) {
                $optNotice.prepend($container);
                $container.css('position', 'relative');
            }
            else {
                $('body').append($container);
            }
        }
    }

    function addArchiveButton() {
        if (location.pathname === '/' || location.pathname === '/index.html') return;
        var wrapper = document.createElement('div');
        var link = document.createElement('a');
        var archive_name = currentVersion !== 'latest' ? currentVersion : latestVersion;
        link.href = `/archives/${archive_name}.zip`;
        if (window.location.pathname.startsWith('/cn')) {
            link.href =  `/cn/archives/${archive_name}.zip`;
        }
        link.innerText = 'Download Docs';
        wrapper.appendChild(link);
        $(wrapper).addClass('ovino-btn');
        $(wrapper).attr('id', 'download-link');
        $('#download-link').replaceWith(wrapper);
    }

    // Determine where we'd go if clicking on a version selector option
    function getPageUrlWithVersion(url, version) {
        var fullURL = window.location.pathname.split('/');
        var lastElement = fullURL.slice(-1)[0];
        var newURL = url.replace(getCurrentVersion(), version);

        if ($("body").hasClass("homepage")) {
            if (window.location.protocol == "file:") {
                newURL = url.replace("index.html", version + "/" + landingPage);
            }
            if (lastElement == "404.html") {
                newURL = url.replace("404.html", version + "/" + landingPage);
            } else {
                newURL = documentationHost + "/" + version + "/" + landingPage;
            }
        }

        return encodeURI(newURL);
    }

    // Create version selector and attach handlers to it
    function buildVersionsContent() {
        if (versions && versions.length > 0) {
            var $versionsContent = $('<div id="versionsSelector"></div>');
            var $selectorButton = $(
                '<button type="button" class="current-version version-toggle"></button>'
            );
            var $versionsList = $('<ul id="versionsList"></ul>');
            var listItems = "";
            var url = window.location.href;
            var max_length = 0;
            for (var i = 0, verLength = versions.length; i < verLength; i++) {
                var elementVersion;
                var ver = versions[i];
                // Highlight current version for user
                if (ver.version === currentVersion) {
                    listItems += '<li class="active">';
                } else {
                    listItems += "<li>";
                }
                if (ver.version === 'latest') {
                    elementVersion = 'latest (' + latestVersion + ')';
                }
                else {
                    elementVersion = ver.version;
                }
                listItems +=
                    '<a href="' +
                    getPageUrlWithVersion(url, ver.version) +
                    '">Version ' +
                    elementVersion +
                    "</a>";
                listItems += "</li>";
                if (ver.version.length > max_length){
                    max_length = ver.version.length;
                }
            }
            
            max_length += 'latest ()'.length;
            var scale = 7;
            var versionLength = 'version '.length;
            var align = 5;
            $versionsList.css("width", ((max_length + versionLength+align) * scale).toString() + "px");

            // handle version selector events
            var handleVersionBlur = function () {
                if ($versionsList.hasClass("opened")) {
                    window.removeEventListener("click", handleVersionBlur, false);
                    $versionsList.removeClass("opened");
                } else {
                    $versionsList.toggleClass("opened");
                }
            };

            $selectorButton.on("click", function () {
                window.addEventListener("click", handleVersionBlur, false);
            });

            $versionsList.append(listItems);
            var menuButtonText;
            if (currentVersion === 'latest') {
                menuButtonText = "Version <strong>latest (" + latestVersion + ")</strong>"
            }
            else {
                menuButtonText = "Version <strong>" + currentVersion + "</strong>";
            }
            $versionsContent.append(
                $selectorButton.html(menuButtonText)
            );
            $versionsContent.append($versionsList);
            
            $("#versionsSelector").replaceWith($versionsContent);
        }
    }

    // For homepage and footer, update any links with a version in them to
    // point to the current version
    function updateAllLinks() {
        $(".openvino-content a, .api-content a, .footer a").each(function () {
            $(this).attr("href", function (index, old) {
                return old.replace('<version_placeholder>', currentVersion);
            });
        });
        $(".homelink-id").each(function () {
            $(this).attr("href", function (index, old) {
                return old.replace('<domain_placeholder>', documentationHost);
            });
        });
        $('[property="og:url"]').each(function () {
            $(this).attr("content", function (index, old) {
                return old.replace('<domain_placeholder>', documentationHost);
            });
        });
    }

    return {
        init: init
    };
}

function updateAllLinksForArchive() {
    $(".openvino-content a, .api-content a, .footer a").each(function () {
        $(this).attr("href", function (index, old) {
            return old.replace('/<version_placeholder>/', '');
        });
    });
    $(".homelink-id").each(function () {
        $(this).attr("href", function (index, old) {
            return old.replace('<domain_placeholder>', 'index.html');
        });
    });
    $('[property="og:url"]').each(function () {
        $(this).attr("content", function (index, old) {
            return old.replace('<domain_placeholder>', 'index.html');
        });
    });
}

/**
 * Builds and updates verison selector menu on full "load" event
 * @author Amplified - http://amplifiedbydesign.com/
 */
(function openVinoVersionsLayout() {
    var VersionsBuilder = openVinoVersions();

    window.addEventListener(
        "load",
        function loadVersions() {
            window.removeEventListener("load", loadVersions, false);
            if (window.location.protocol === 'file:') {
                updateAllLinksForArchive();
            }
            else {
                VersionsBuilder.init();
            }
        },
        false
    );
})();
