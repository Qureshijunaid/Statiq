import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect, Provider } from 'react-redux';
import Toast from 'react-native-toast-message';
import { getUser } from './src/utils/asyncstorage'
import AuthStack from './src/navigation/auth';
import AppStack from './src/navigation/appStack'
import store from './src/store';
import SplashStack from './src/navigation/splash';
import { switchRoute } from './src/actions/auth';


function App(props) {
  const [state, setState] = useState({
    isLogedIn: false
  })
  useEffect(() => {
    setTimeout(() => {
      props.dispatch(switchRoute());
    }, 2000);
  }, [])

  return (
    <NavigationContainer >
      {
        props.auth.isAppLoading ?
          <SplashStack />

          :
          props.auth.isLogedIn ?
            <AppStack />
            :
            <AuthStack />
      }

    </NavigationContainer>
  )
}

function mapStateToProps(state) {
  const { auth
  } = state
  return {
    auth

  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  }
}

const Switching = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)



export default function Root() {
  return (
    <Provider store={store}>
      <Switching />
      <Toast
        ref={(ref) => Toast.setRef(ref)}
        topOffset={20}
      />
    </Provider>
  )
}