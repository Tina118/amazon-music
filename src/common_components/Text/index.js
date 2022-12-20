import Typography from '@material-ui/core/Typography';

const Text = ({children,...props}) => <Typography style={{...props}}>{children}</Typography>

export default Text;