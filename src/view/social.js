import React from 'react';
import FacebookProvider, { Like } from 'react-facebook';
import injectSheet from 'react-jss';
import { gutters } from './global-style';

const style = {
  container: {
      // width: 200,
      // margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      paddingTop: gutters.large,
      paddingBottom: gutters.large,
  },
};

export default injectSheet(style)(({sheet: {classes}}) => (
    <div className={classes.container}>
        <FacebookProvider appID="233565556748329">
            <Like
                href="http://fullon.stphils.org.au"
                size="large"
                layout="button_count"
                share
            />
        </FacebookProvider>
    </div>
));

// <div id="fb-root"></div>
// <script>(function(d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (d.getElementById(id)) return;
//     js = d.createElement(s); js.id = id;
//     js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=233565556748329";
//     fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));</script>
// <div class="fb-like" data-href="http://fullon.stphils.org.au" data-layout="button_count" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>