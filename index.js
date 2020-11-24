var money=1000000;
for(i=0;i<12;i++)
{
	var fmoney=money;
	var tenpercent= money * 0.1 * 30;
	money=tenpercent+money;
	var month=i+1;
	console.log(month+": firstmoney = "+new Intl.NumberFormat('fa-IR').format(fmoney)+",ten percent in 30 day: "+new Intl.NumberFormat('fa-IR').format(tenpercent)+",endmoeny: "+new Intl.NumberFormat('fa-IR').format(money));
}
