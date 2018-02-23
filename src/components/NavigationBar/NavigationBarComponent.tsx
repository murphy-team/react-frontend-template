import * as React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UploadFiles from 'material-ui/svg-icons/file/cloud-upload';
import Settings from 'material-ui/svg-icons/action/settings'
import FindInPage from 'material-ui/svg-icons/action/find-in-page';
import DownloadFiles from 'material-ui/svg-icons/file/file-download';
import SearchDatabase from 'material-ui/svg-icons/action/youtube-searched-for'


const SearchDnaSequences = <FindInPage/>;
const UploadFilesToProcess = <UploadFiles/>;

export interface INavigationBarComponentProps {
    currentRoute: number
}

export interface INavigationBarComponentState {
}

export interface INavigationBarComponentDispatch {
    onChangeRoute: (route) => any;
}

export class NavigationBarComponent extends React.Component<INavigationBarComponentProps & INavigationBarComponentDispatch , INavigationBarComponentState> {
    public constructor(props: INavigationBarComponentProps  & INavigationBarComponentDispatch) {
        super(props);
    }

    private onTouchListener(routeIndex) {
        this.props.onChangeRoute(routeIndex);
    }

    public render() {

        return (
            <div className="navigation-bar-component">
                <MuiThemeProvider>
                    <Paper zDepth={2}>
                        <BottomNavigation selectedIndex={this.props.currentRoute}>
                            <BottomNavigationItem
                                label={"Index"}
                                icon={SearchDnaSequences}
                                onTouchTap={() => this.onTouchListener(0)}
                            />

                            <BottomNavigationItem
                                label={"Link 1"}
                                icon={UploadFilesToProcess}
                                onTouchTap={() => this.onTouchListener(1)}
                            />
                        </BottomNavigation>
                    </Paper>
                </MuiThemeProvider>
            </div>

        );
    }
}
