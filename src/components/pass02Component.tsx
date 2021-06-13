import React from "react"
import { Redirect } from "react-router-dom";

import clsx from 'clsx';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

import GoogleIcon from '../assets/icons/flat-color-icons_google.png';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            width: '100%'
        },
        margin: {
            margin: theme.spacing(0),
        },
        withoutLabel: {
            marginTop: theme.spacing(0),
        },
        textField: {
            width: '80%',
        },
        input: {
            border: '1px solid green',
            height: '3rem',
            maxWidth: '45rem',
            marginBottom: '1rem',
            borderRadius: '5px'
        }
    }),
);

interface State {
    telephone: string;
    address: string;
    country: string;
}

export default function Pass01({ ...props }, mainState: number) {
    // const [state, setState] = useState(mainState)
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        telephone: '',
        address: '',
        country: '',
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = () => {
        props.history.push("/pass03");
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className="pass01Container">
            <div className="text">
                <h1>Registra tu cuenta individual</h1>
                <p>Para poder revisar que se trata de una cuenta real,
                    necesitamos la siguiente información</p>
            </div>
            <form className={classes.root}>
                <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                    <FormHelperText id="name-helper-text">Nombre completo *</FormHelperText>
                    <OutlinedInput className={clsx(classes.input)}
                        id="name"
                        value={values.name}
                        onChange={handleChange('name')}
                        aria-describedby="name-helper-text"
                        inputProps={{
                            'aria-label': 'name',
                        }}
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)} variant="outlined">
                    <FormHelperText id="email-helper-text">Correo electrónico *</FormHelperText>
                    <OutlinedInput className={clsx(classes.input)}
                        id="email"
                        value={values.email}
                        onChange={handleChange('email')}
                        aria-describedby="email-helper-text"
                        inputProps={{
                            'aria-label': 'email',
                        }}
                    />
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)} variant="outlined">
                    {/* <InputLabel htmlFor="password">Password</InputLabel> */}
                    <FormHelperText id="password-helper-text">Contraseña *</FormHelperText>
                    <OutlinedInput className={clsx(classes.input)}
                        id="-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        aria-describedby="password-helper-text"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControlLabel
                    control={<GreenCheckbox checked={values.checked} onChange={handleCheckedChange} name="checked" />}
                    label="Custom color"
                />
                <Button
                    onClick={handleSubmit}
                    className={clsx(classes.input, classes.textField)}
                    variant="contained"
                    color="primary">
                    Registrar cuenta
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleSubmit}
                    className={clsx(classes.input, classes.textField)}
                    startIcon={<img src={GoogleIcon} alt="Google Sign Up"></img>}
                >
                    Save
                </Button>
            </form>
        </div>
    )
}