import {
	Container,
	Paper,
	TableRow,
	TableHead,
	TableContainer,
	TableCell,
	TableBody,
	Table,
	withStyles,
	makeStyles,
	Typography,
	Grid,
	FormControl,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Button,
} from "@material-ui/core";
import { FindInPage } from "@material-ui/icons";

const StyledTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

function createData(
	date,
	product,
	customer,
	model,
	warranty,
	boughtProduct,
	cost
) {
	return { date, product, customer, model, warranty, boughtProduct, cost };
}

const rows = [
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
	createData(
		"21 Apr 2021",
		"TVS Apache",
		"Frozen yoghurt",
		"RSD43",
		"No",
		"Head Light, Light",
		535
	),
];

const useStyles = makeStyles(theme => ({
	table: {
		minWidth: 700,
	},
	header: {
		marginTop: theme.spacing(8),
	},
	headerTitle: {
		textTransform: "capitalize",
		fontFamily: "Abril Fatface",
	},
	headerDesc: {
		letterSpacing: "4px",
		marginBottom: theme.spacing(6),
		fontFamily: "Josefin Sans",
	},
	motorsActions: {
		marginBottom: theme.spacing(4),
	},
	button: {
		height: "56px",
	},
}));

const Servicing = () => {
	const classes = useStyles();

	return (
		<Container>
			<div className={classes.header}>
				<Typography
					variant='h4'
					align='left'
					color='secondary'
					gutterBottom
					paragraph
					className={classes.headerTitle}>
					Some Text about your motorcycle store list.
				</Typography>
				<Typography
					component='p'
					align='left'
					color='textSecondary'
					gutterBottom
					paragraph
					className={classes.headerDesc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
					ducimus quisquam nesciunt beatae nam odio cum minus. Aperiam
					eligendi, consequatur nesciunt quaerat beatae reiciendis ullam a,
					illum recusandae explicabo quo? Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Repellat ducimus quisquam nesciunt
					beatae nam odio cum minus. Aperiam eligendi, quo?
				</Typography>
			</div>
			<div className={classes.motorsActions}>
				<Grid container spacing={4} justify='center'>
					<Grid item xs={3}>
						<Button
							fullWidth
							variant='contained'
							color='primary'
							size='large'
							className={classes.button}>
							Create Customer
						</Button>
					</Grid>
					<Grid item xs={9}>
						<FormControl variant='outlined' fullWidth>
							<InputLabel htmlFor='outlined-adornment-password'>
								Search a Customer...
							</InputLabel>
							<OutlinedInput
								id='outlined-adornment-password'
								endAdornment={
									<InputAdornment position='end'>
										<FindInPage color='textSecondary' />
									</InputAdornment>
								}
								labelWidth={160}
							/>
						</FormControl>
					</Grid>
				</Grid>
			</div>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell align='left'>Date</StyledTableCell>
							<StyledTableCell align='left'>Products</StyledTableCell>
							<StyledTableCell align='left'>Customer</StyledTableCell>
							<StyledTableCell align='left'>Model</StyledTableCell>
							<StyledTableCell align='left'>Warranty</StyledTableCell>
							<StyledTableCell align='left'>
								With Product
							</StyledTableCell>
							<StyledTableCell align='left'>Total Cost</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<StyledTableRow key={row.date}>
								<StyledTableCell component='th' scope='row'>
									{row.date}
								</StyledTableCell>
								<StyledTableCell component='th' scope='row'>
									{row.product}
								</StyledTableCell>
								<StyledTableCell align='left'>
									{row.customer}
								</StyledTableCell>
								<StyledTableCell align='left'>
									{row.model}
								</StyledTableCell>
								<StyledTableCell align='left'>
									{row.warranty}
								</StyledTableCell>
								<StyledTableCell align='left'>
									{row.boughtProduct}
								</StyledTableCell>
								<StyledTableCell align='left'>
									{row.cost} &#2547;
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default Servicing;
