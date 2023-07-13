import PagerView from 'react-native-pager-view';
import {StyleSheet, View} from 'react-native';
import OnboardingPage from '../components/OnboardingPage';
import MyStatusBar from '../components/MyStatusBar';
import Footer from '../components/Footer';
import {useRef, useState} from 'react';

const Onboarding = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const pagerRef = useRef(null);
  const handlePageChange = pageNumber => {
    pagerRef.current.setPage(pageNumber);
    
  };
  return (
    <>
      <MyStatusBar backgroundColor="#ffc93c" barStyle="dark-content" />
      <View style={styles.outerContainer}>
        <PagerView style={styles.outerContainer} initialPage={0} ref={pagerRef} onPageSelected={()=>{console.log('------ kkl -----')}}>
          <View key={1}>
            <OnboardingPage
              backgroundColor="#ffc93c"
              iconName="user"
              title="Welcome to the Mindefy MMT app"
              currentPage={currentPage}
            />
            {/* <Footer
              pageNumber={0}
              backgroundColor="#ffc93c"
              rightButtonLabel="Next"
              rightButtonPress={() => handlePageChange(1)}
            /> */}
          </View>
          <View key={2}>
            <OnboardingPage
              backgroundColor="#ffc93c"
              iconName="user"
              title="Welcome to the Mindefy MMT app page 2"
            />
            {/* <Footer
              pageNumber={1}
              backgroundColor="#ffc93c"
              leftButtonLabel="Back"
              leftButtonPress={() => {
                handlePageChange(0);
              }}
              rightButtonLabel="Next"
              rightButtonPress={() => handlePageChange(2)}
            /> */}
          </View>
          <View key={3}>
            <OnboardingPage
              backgroundColor="#ffc93c"
              iconName="user"
              title="Welcome to the Mindefy MMT app page 3"
            />
            {/* <Footer
              pageNumber={2}
              backgroundColor="#ffc93c"
              leftButtonLabel="Back"
              leftButtonPress={() => {
                handlePageChange(0);
              }}
              rightButtonLabel="Next"
              rightButtonPress={() => true}
            /> */}
          </View>
        </PagerView>
        <Footer 
                      pageNumber={currentPage}
                      backgroundColor="#ffc93c"
                      leftButtonLabel="Back"
                      leftButtonPress={() => {
                        handlePageChange(0);
                      }}
                      rightButtonLabel="Next"
                      rightButtonPress={() => handlePageChange(0)}
        />
      </View>
    </>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
});
