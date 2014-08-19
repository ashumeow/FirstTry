var clickCounter = 0;
chrome.extension.onRequest.addListener(function(request, sender, sendResponse)
{
	if(request.action=='getCounter')
	{
		sendResponse({counterValue:clickCounter});
	}
	else
	{
		if(request.action == 'setCounter')
		{
			clickCounter = request.counterValue;
			sendResponse({});
		}
	}
});
