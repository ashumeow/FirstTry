function checkForWikiUrl(tabID, changeinfo, tab)
{
	var isWikiUrl = tab.url.match(/wikipedia\.org);
	if(isWikiUrl)
	{
		chrome.pageAction.show(tabID);
	}
	else
	{
		chrome.pageAction.hide(tabID);
	}
});
chrome.tabs.onUpdated.addListener(checkForWikiUrl);
