import { connect } from 'react-redux'
import ChannelCreateForm from 'components/Channels/ChannelCreateForm'
import { tickerSelectors } from 'reducers/ticker'
import { openChannel } from 'reducers/channels'
import { queryFees } from 'reducers/pay'
import { updateContactFormSearchQuery } from 'reducers/contactsform'
import { walletSelectors } from 'reducers/wallet'
import { showNotification } from 'reducers/notification'

const mapStateToProps = state => ({
  activeWalletSettings: walletSelectors.activeWalletSettings(state),
  searchQuery: state.contactsform.searchQuery,
  currency: tickerSelectors.currency(state),
  walletBalance: state.balance.walletBalance,
  currencyName: tickerSelectors.currencyName(state),
  isQueryingFees: state.pay.isQueryingFees,
  onchainFees: state.pay.onchainFees
})

const mapDispatchToProps = {
  openChannel,
  queryFees,
  updateContactFormSearchQuery,
  showNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelCreateForm)
