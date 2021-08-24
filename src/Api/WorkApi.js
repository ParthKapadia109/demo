import GetAppIcon from "@material-ui/icons/GetApp";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

const WorkApi = () => [
  {
    id: 1,
    logo: <GetAppIcon color="secondary" fontSize="Large" />,
    name: "Download The App",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dolorem maiores fugiat culpa veniam iste laboriosam illum, facere assumenda vel delectus cumque consequuntur qui distinctio accusamus.",
  },
  {
    id: 2,
    logo: <SupervisedUserCircleIcon color="secondary" fontSize="Large" />,
    name: "Complete The Instructions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dolorem maiores fugiat culpa veniam iste laboriosam illum, facere assumenda vel delectus cumque consequuntur qui distinctio accusamus.",
  },
  {
    id: 3,
    logo: <AccountBalanceWalletIcon color="secondary" fontSize="Large" />,
    name: "Receive Your Funds",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore dolorem maiores fugiat culpa veniam iste laboriosam illum, facere assumenda vel delectus cumque consequuntur qui distinctio accusamus.",
  },
];
export default WorkApi;
