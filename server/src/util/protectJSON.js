module.exports = function (req, res, next) {
	var origin = res.send;
	res.send = function (body) {
		var contentType = res.getHeader('Content-Type');

		if (contentType && contentType.indexOf('application/json') > -1) {
			return origin.call(res, ")]}',\n" + body);
		}

		origin.apply(res, arguments);
	};
	next();
};