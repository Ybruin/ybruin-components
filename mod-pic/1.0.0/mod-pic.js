define('components/mod-pic/mod-pic.js', function(require, exports, module) {
  
  	/**
  	 * @description：模板页图片模块
  	 *
  	 */
  	//require('jquery');
  
  	var ModPic = React.createClass({displayName: "modPic",
  		getInitialState: function() {
  			return {
  				pic: 'http://res.cont.yy.com/modpage/pc/images/default.png'
  			}
  		},
  		componentDidMount: function() {
  			var self = this;
  			$.ajax({
  					url: 'http://www.yy.com/c/cont/subject/getNoticeModuleByModuleId.action?mid='+this.props.id+'&size='+this.props.size,
  					type: 'GET',
  					dataType: 'json'
  				})
  				.done(function(json) {
  					var result = json.result;
  
  					if (result == 0) {
              console.log(json)
  						var imgUrl = json.data[0].imgUrl;
  						self.setState({
  							pic: imgUrl
  						})
  					}
  				});
  		},
  		render: function() {
  			return (
  				React.createElement("div", {className: "mod-pic"}, 
  					React.createElement("img", {src: this.state.pic})
  				)
  			);
  		}
  	})
  
  	module.exports = ModPic;
  
  });