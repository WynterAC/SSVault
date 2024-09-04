module.exports = getnotie
let quickAddApi;

async function getnotie (params) {
    ({quickAddApi} = params) 
    let notice =  await quickAddApi.wideInputPrompt("🏷️ 便签");
	if(notice)
	{
		await new Notice(notice,0);
	}
}