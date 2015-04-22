$(function(){
    var client = new WindowsAzure.MobileServiceClient(
		"https://garimonaca.azure-mobile.net/",
		"DtVwvAdIPqbGghQuUknXZyTtuQJuiA70"
	);
	var item = { text: "すばらしいアイテム" };
	client.getTable("Item").insert(item);
	alert("hoge")
});