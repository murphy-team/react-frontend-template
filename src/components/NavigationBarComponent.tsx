import * as React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import UploadFiles from 'material-ui/svg-icons/file/cloud-upload';
import Settings from 'material-ui/svg-icons/action/settings'
import FindInPage from 'material-ui/svg-icons/action/find-in-page';
import DownloadFiles from 'material-ui/svg-icons/file/file-download';
import SearchDatabase from 'material-ui/svg-icons/action/youtube-searched-for'
import {Link, withRouter} from "react-router-dom";
import {ToDoPageDTO} from "../domain/pages/ToDoPageDTO";
import {RouteComponentProps} from "react-router-dom";
import {connect} from "react-redux";

const SearchDnaSequences = <FindInPage/>;
const UploadFilesToProcess = <UploadFiles/>;
const DownloadFilesToLocal = <DownloadFiles/>;
const AppSettings = <Settings/>;
const SearchFromDatabase = <SearchDatabase/>;

export interface INavigationBarComponentProps/* extends RouteComponentProps<any>, React.Props<any>*/ {
    history?: any
    intl?: any;
}

export interface INavigationBarComponentState {

}

export interface INavigationBarComponentDispatch {

}



export class NavigationBarComponent extends React.Component<INavigationBarComponentProps & INavigationBarComponentDispatch & INavigationBarComponentState> {
    public constructor(props: INavigationBarComponentProps & INavigationBarComponentState & INavigationBarComponentDispatch) {
        super(props);
    }
    state = {
        selectedIndex: 0,
    };

    componentWillMount(){
        console.log("History propsss", this.props.history)
    }

    select = (index) => {
        this.setState({selectedIndex: index});
        if (index == 0) {
            this.props.history.push("/");
        } else if (index == 1) {
            this.props.history.push("/test1");
        } else if (index == 2) {
            this.props.history.push("/test2");
        }
    };

    public render() {

        return (
            <div>
                <MuiThemeProvider>
                    <Paper zDepth={2}>
                        <BottomNavigation selectedIndex={this.state.selectedIndex}>
                            <BottomNavigationItem
                                label={"Index"}
                                icon={SearchDnaSequences}
                                onTouchTap={() => this.select(0)}
                            />

                            <BottomNavigationItem
                                label={"Link 1"}
                                icon={UploadFilesToProcess}
                                onTouchTap={() => this.select(1)}
                            />

                            <BottomNavigationItem
                                label={"Link 2"}
                                icon={DownloadFilesToLocal}
                                onTouchTap={() => this.select(2)}
                            />
                        </BottomNavigation>
                    </Paper>
                </MuiThemeProvider>
            </div>

        );
    }
}

/*
const connectModule = connect(
    (state) => ({

    }),
    {

    })(NavigationBarComponent);

export default withRouter(connectModule);*/
