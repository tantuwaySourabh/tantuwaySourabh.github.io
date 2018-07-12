var app = angular.module('dashboard').controller('dashboardCtrl',function($scope,$state){
        $scope.mytodoObj = {};
    $scope.mytodoObj.name = '';
    $scope.mytodoObj.description = '';
    $scope.mytodoObj.checked = false;
    $scope.list=[];
    $scope.addData=function(){
        // $scope.obj={};
        // $scope.obj.name=$scope.name;
        //   $scope.obj.Description= angular.copy($scope.Description);
        //   $scope.list.push($scope.obj);
        $scope.list.push(angular.copy($scope.mytodoObj));
        $scope.mytodoObj.name='';
        $scope.mytodoObj.description='';
        $scope.mytodoObj.checked=false;

      };
      $scope.delete=function(index)
      {
      $scope.list.splice(index,1);
      };
    //   $scope.mouseOver=function(data){
    //       $scope.data=data.desc;
    //   }
      
    //   $scope.mouseLeave=function(){
    //     $scope.data='';
    // }

      $scope.showDesc= function(index){
         //alert($scope.list[index].description);
          if($scope.list[index].description != '')
          {
              document.getElementById("desc").innerHTML=$scope.list[index].description;
          }
          else
          {
            document.getElementById("desc").innerHTML="no content";
          }
      }

});