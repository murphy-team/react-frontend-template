import * as React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import UploadFiles from 'material-ui/svg-icons/file/cloud-upload';
import Settings from 'material-ui/svg-icons/action/settings'
import FindInPage from 'material-ui/svg-icons/action/find-in-page';
import DownloadFiles from 'material-ui/svg-icons/file/file-download';
import SearchDatabase from 'material-ui/svg-icons/action/youtube-searched-for'
import {Link} from "react-router-dom";

const SearchDnaSequences = <FindInPage/>;
const UploadFilesToProcess = <UploadFiles/>;
const DownloadFilesToLocal = <DownloadFiles/>;
const AppSettings = <Settings/>;
const SearchFromDatabase = <SearchDatabase/>;


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {IDispatchPropsTestPage, IPropsTestPage} from "../pages/TestPage";

export interface INavigationBarComponentProps {

}

export interface INavigationBarComponentState {

}


export class NavigationBarComponent extends React.Component<INavigationBarComponentProps & INavigationBarComponentState> {
    public constructor(props: INavigationBarComponentProps & INavigationBarComponentState) {
        super(props);
    }
    state = {
        selectedIndex: 0,
    };




    // select = (index) => {
    //     this.setState({selectedIndex: index});
    //     if (index == 1) {
    //         browserHistory.push(RoutesConstants.SUB_SEQUENCE_SEARCH_ROUTE_PATH);
    //     } else if (index == 2) {
    //         browserHistory.push(RoutesConstants.DATABASE_SEARCH_ROUTE_PATH);
    //     }
    //
    // };

    public render() {

        return (
            <div>
                <MuiThemeProvider>
                    <Paper zDepth={2}>
                        <RaisedButton label={"Index"} containerElement={<Link to="/" />}>
                        </RaisedButton>

                        <RaisedButton label={"testpage1"} containerElement={<Link to="/test1" />}>
                        </RaisedButton>

                        <RaisedButton label={"testpage2"} containerElement={<Link to="/test2" />}>
                        </RaisedButton>
                    </Paper>
                </MuiThemeProvider>
            </div>

        );
    }
}