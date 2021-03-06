var app = angular.module("beetchat", []);


document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);



app.controller("main", function($scope, $timeout) {


    $scope.message = {};
    $scope.message.textColor = "red";
    $scope.statusColor = 'red';

    Socket.on('messages', function(data) {
        $scope.messages = data.messages;
        $scope.$apply();
        if( document.getElementById('messages') ) {
            document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight;
        }
    })

    Socket.on('options', function(data) {
        $scope.options = data.options;
        $scope.$apply();
    })

    Socket.on('oleg', function(data) {
        $scope.oleg = data.oleg;
        if ($scope.oleg == true ) {
          $scope.statusColor = 'green';
        }
        else {
          $scope.statusColor = 'red';
        }
        $scope.$apply();
    })

    // $scope.updateStatus = function() {
    //     if ($scope.oleg == true ) {
    //       $scope.statusColor = 'green';
    //     }
    //     else {
    //       $scope.statusColor = 'red';
    //     }
    // }




    $scope.updateOptions = function() {
        Socket.emit("options", {
            textColor: $scope.options.textColor,
            textSize: $scope.options.textSize,
            bgColor: $scope.options.bgColor,
            bgImage: $scope.options.bgImage,
            wrapperAnimation: $scope.options.wrapperAnimation,
            popup: $scope.options.popup,
            popuptext: $scope.options.popuptext,
            popupBg: $scope.options.popupBg,
            popupTextColor: $scope.options.popupTextColor,
            inputText: $scope.message.text,
            LiveCss: $scope.options.LiveCss,
            showMessages: $scope.options.showMessages,
            blendMode: $scope.options.blendMode,
            filter: $scope.options.filter,
            filterValue: $scope.options.filterValue,
            glitcher: $scope.options.glitcher,
            glitcherX: $scope.options.glitcherX,
            popupScale: $scope.options.popupScale,
            transitionState: $scope.options.transitionState,
            userInputType: $scope.options.userInputType,
            userInputTextType: $scope.options.userInputTextType,
            userInputLabel: $scope.options.userInputLabel,
            userInputModel: $scope.options.userInputModel,
            userInputAction: $scope.options.userInputAction,
            puzzle1: $scope.options.puzzle1
        });
    }

    $scope.sendMessage = function() {
        Socket.emit("new message", {
            user: $scope.user,
            text: $scope.message.text,
            textColor: $scope.message.textColor,
            textSize: $scope.message.textSize
        });

        if  ($scope.options.puzzle1 == false ) {
          if ( $scope.message.text == "РJEK3-2LNBP-IIOD" ) {
              $scope.pinSolved();
          }
          else{
              $scope.accessDenied();
          }
        }

        $scope.message.text = "";
        $scope.options.inputText = "";

        if ( $scope.message.text == "999" ) {
            $scope.options.puzzle2 = true;
            $scope.options.bgImage = '/gifs/6.gif';
            $scope.options.popuptext = 'Kirkorov!';
            $scope.options.popupTextColor = 'white',
            $scope.options.popupScale = '30'
        }
    }

    $scope.pinSolved = function() {
      $scope.options.puzzle1 = true;
      $scope.options.bgImage = '/gifs/21.gif';
      $scope.options.popuptext = '[Access Confirmed]]';
      $scope.options.popupTextColor = '#fff';
      $scope.options.popupBg = '#0f0'
      $scope.options.userInputTextType = '';
      document.activeElement.blur();
      $scope.updateOptions();

      $timeout( function(){
        $scope.options.wrapperAnimation = 'tvon';
        $scope.options.bgImage = '/gifs/6.gif';
        $scope.options.popup = false;
        $scope.options.showMessages = true;
        $scope.options.wrapperAnimation = '';
        $scope.options.glitcher = true;
        $scope.updateOptions();
      }, 4000 );
    }

    $scope.accessDenied = function() {
      $scope.options.bgImage = '/gifs/22.gif';
      $scope.options.popuptext = '[Access Denied]';
      $scope.options.popupTextColor = '#f00';
      $scope.options.userInputType = '';
      $scope.options.popup = true;
      $scope.options.glitcher = true;
      document.activeElement.blur();
      $scope.updateOptions();

      $timeout( function(){$scope.options.popup = false;}, 50 );
      $timeout( function(){$scope.options.popup = true;},  100 );
      $timeout( function(){$scope.options.popup = false;}, 150 );
      $timeout( function(){$scope.options.popup = true;},  200 );
      $timeout( function(){$scope.options.popup = false;}, 250 );
      $timeout( function(){$scope.options.popup = true;},  300 );
      $timeout( function(){$scope.options.popup = false;}, 350 );
      $timeout( function(){$scope.options.popup = true;},  400 );
      $timeout( function(){$scope.options.popup = false;}, 450 );
      $timeout( function(){$scope.options.popup = true;},  500 );
      $timeout( function(){$scope.options.popup = false;}, 550 );
      $timeout( function(){$scope.options.popup = true;},  600 );
      $timeout( function(){$scope.options.popup = false;}, 650 );
      $timeout( function(){$scope.options.popup = true;},  700 );
      $timeout( function(){$scope.options.popup = false;}, 750 );
      $timeout( function(){$scope.options.popup = true;},  800 );
      $timeout( function(){$scope.options.popup = false;}, 850 );
      $timeout( function(){$scope.options.popup = true;},  900 );
      $timeout( function(){$scope.options.popup = false;}, 950 );
      $timeout( function(){$scope.options.popup = true;},  1000 );

      $timeout( function(){
        $scope.options.bgImage = '/gifs/0.gif';
        $scope.options.popupTextColor = '#fff';
        $scope.options.popuptext = '[Enter PIN]';
        $scope.options.popupBg = 'rgba(0,0,0,0)';
        $scope.options.showMessages = false;
        $scope.options.glitcher = false;
        $scope.updateOptions();
      }, 1100 );
    }

    $scope.actionExplosion = function() {
      $scope.options.bgImage = '/gifs/19.gif';
      $scope.options.popuptext = 'BOOM';
      $scope.options.popupBg = 'orange';
      $scope.options.popup = true;
      $scope.options.popupTextColor = 'white';
      $scope.options.userInputType = '';
      $scope.options.glitcherLayover = true;
      $scope.options.wrapperAnimation = 'none'
      $scope.updateOptions();
      $timeout( function(){
        $scope.options.wrapperAnimation = '';
        $scope.options.bgImage = '';
        $scope.options.showMessages = true;
        $scope.options.popup = false;
        $scope.options.transitionState = 'none';
        $scope.updateOptions();
      }, 2000 );
    }

    $scope.windowsError = function(){
      $scope.options.wrapperAnimation = 'tvoff';
      $scope.options.bgImage = '/gifs/13.gif';
      $scope.options.popup = false;
      $timeout( function(){
        $scope.options.wrapperAnimation = '';
        $scope.options.bgImage = '/gifs/13.gif';
        $scope.options.showMessages = false;
        $scope.options.transitionState = 'none';
        $scope.updateOptions();
      }, 2000 );
    }



    $scope.resetKeyframes = function() {
        $scope.options.wrapperAnimation = '';
        $scope.updateOptions();
        $scope.options.transitionState = 'none';
        $scope.options.showMessages = 'true';
        $scope.options.bgImage = "";
    }


    $scope.reset = function() {
        $scope.options.textColor = "#f00",
        $scope.options.textSize = 16,
        $scope.options.bgImage = "/gifs/0.gif",
        $scope.options.wrapperAnimation = "none",
        $scope.options.inputText = "",
        $scope.options.LiveCss = "",
        $scope.options.popupBg = "",
        $scope.options.popupTextColor = "white",
        $scope.options.popup = true,
        $scope.options.popuptext = '[Enter PIN]',
        $scope.options.popupTextColor = 'white',
        $scope.options.showMessages = false,
        $scope.options.blendMode = 'normal',
        $scope.options.wrapperAnimation = "none",
        $scope.options.inputText = "",
        $scope.options.LiveCss = "",
        $scope.options.popupBg = "",
        $scope.options.popupTextColor = 'white',
        $scope.options.showMessages = false,
        $scope.options.userInputTextType = 'password',
        $scope.options.userInputModel = 'message',
        $scope.options.userInputAction = '',
        $scope.options.glitcherLayover = false,
        $scope.options.puzzle1 = false,
        $scope.options.userInputActionType = 'None',
        $scope.messages = "",
        $scope.message.text = "",
        $scope.messages = "",
        $scope.updateOptions()
    }
  //
  //   if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function(position){
  //     $scope.$apply(function(){
  //       $scope.position = position;
  //     });
  //   });
  // }

});
