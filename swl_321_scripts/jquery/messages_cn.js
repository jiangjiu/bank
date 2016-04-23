/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: CN
 */
jQuery.extend(
        jQuery.validator.messages, {
        required: "必选字段",
		remote: "请修正该字段",
		email: "电子邮件格式有误",
		url: "请输入合法的网址",
		date: "请输入合法的日期",
		dateISO: "请输入合法的日期 (ISO).",
		number: "请输入合法的数字",
		digits: "只能输入整数",
		creditcard: "请输入合法的信用卡号",
		equalTo: "请再次输入相同的值",
		accept: "请输入拥有合法后缀名的字符串",
		maxlength: jQuery.validator.format("长度最多 {0} 个字符"),
		minlength: jQuery.validator.format("长度最少 {0} 个字符"),
		rangelength: jQuery.validator.format("长度要在 {0} 和 {1} 之间"),
		range: jQuery.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
		max: jQuery.validator.format("请输入一个最大为 {0} 的值"),
		min: jQuery.validator.format("请输入一个最小为 {0} 的值")
});

//验证手机号码
jQuery.validator.addMethod("Ismobile", function(value, element) {  
    var length = value.length;     
    var mobile = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;     
    return (length == 11 && mobile.exec(value))? true:false;
}, "请正确填写您的手机号码");

//验证身份证
jQuery.validator.addMethod( "IsCertiNum",function(value,element){     
	var myreg = /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/;
	if(value !=''){if(!myreg.test(value)){return false;}};
return true; 
} , "请正确填写您的身份证号码" );

