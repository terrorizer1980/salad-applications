import { connect } from '../../connect'
import { AccountModalPage } from './components/AccountModalPage'
import { RootStore } from '../../Store'

const mapStoreToProps = (store: RootStore) => ({
  profile: store.profile.profile,
  onCloseClicked: () => store.routing.goBack(),
  onLogout: store.auth.signOut,
})

export const AccountModalContainer = connect(
  mapStoreToProps,
  AccountModalPage,
)
