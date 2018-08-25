app.controller('PersonDetailsCtrl',function($scope){
	$scope.person=[{'firstname':'John','lastname':'Smith','email':'adam.eve@xyx.com','phonenumber':'473936223'},
	{'firstname':'Jack','lastname':'Smith','email':'edam.eve@xyx.com','phonenumber': '673936223'},
	{'firstname':'tom','lastname':'Smith','email':'vdam.eve@xyx.com','phonenumber': '573936223'}]
$scope.addPerson=function(){
		console.log($scope.p)
		$scope.persons.push($scope.p)
		}
 })