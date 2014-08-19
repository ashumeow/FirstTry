$function()
{
	chrome.extension.sendRequest(
	{action:'getCounter'},
	function(response)
	{
		var counter = response.counterValue?response.counterValue:0;
		$('button.count').bind('click',function()
		{
			$('.counter-status').html(counter++);
			chrome.extension.sendRequest(
			{action:'setCounter',
			counterValue:counter},
			function(response)
			{
				console.log('response');
			});
		});
	});
});
