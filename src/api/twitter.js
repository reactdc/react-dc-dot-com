module.exports = function(server, Twitter) {
	server.get('/api/v1.0/tweets', function (req, res, next) {
		Twitter.get(
			'search/tweets',
			{
				q: 'react',
				count: 100
			},
			function(err, data, response) {
				res.send(200, data.statuses);
				next();
			}
		);
	});
};
