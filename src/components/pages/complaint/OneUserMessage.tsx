import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
// @ts-ignore
import userPhoto from "../../../assets/images/peoplePhoto.jpeg";

interface PropsType {
    message: {
        id: number,
        img: string,
        userName: string,
        statusDescription: string,
        time: string
    }

}





const OneUserMessage:React.FC<PropsType> = ({message}) => {
    return (
        <Box sx = {{width:"100%", backgroundColor:"primary.light", border:"20px solid #fff"}}>
            <Grid container key={message.id} sx={{borderBottom: "10px solid #fff"}}>
                <Grid item xs={1.2}><img src={message.img ? message.img : userPhoto} alt="user avatar"
                                         style={{width: "80px", height: "80px", border: "10px solid #E4FFF9"}}/></Grid>
                <Grid item xs={9.8} sx={{padding: "10px 0px"}}>
                    <Typography
                        sx={{fontSize: "20px", fontWeight: "800", marginTop: "5px"}}>{message.userName}</Typography>
                    <Typography sx={{
                        fontSize: "12px",
                        fontWeight: "200",
                        marginTop: "5px",
                        color: "#B1B1B1"
                    }}>{message.statusDescription}</Typography>
                </Grid>

            </Grid>



            <Grid container alignItems="center" direction="row" justifyContent="flex-start" >
                <Grid item sx={{display:"flex", float:"right"}}>
                    <Box sx={{
                        minHeight: '40px',
                        borderBottomLeftRadius: '15px',
                        borderBottomRightRadius: '15px',
                        borderTopRightRadius: '15px',
                        marginLeft: '15px',
                        marginBottom:'10px',
                        border: '1px solid #e0e0e0',
                        backgroundColor:"#fff"
                    }}>
                        <Typography sx={{padding: '5px 8px 0px 8px'}}>Здраствуйте, у вас запись в 12:00</Typography>
                        <Typography component="span" sx={{float:"right",fontWeight: "400",fontSize:"12px",color:"primary.main"}}>10.32</Typography>


                    </Box>
                </Grid>
            </Grid>
            <Grid container alignItems="center" direction="row" justifyContent="flex-end" >
                <Grid item sx={{display:"flex", float:"right"}}>
                    <Box sx={{
                        minHeight: '40px',
                        borderBottomLeftRadius: '15px',
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                        marginRight: '15px',
                        marginBottom:'10px',
                        border: '1px solid #e0e0e0',
                        backgroundColor:"primary.main"
                    }}>
                        <Typography sx={{padding: '5px 8px',color:"#fff"}}>Здраствуйте, хорошо</Typography>
                        <Typography component="span" sx={{float:"right",fontWeight: "400",fontSize:"12px",color:"#fff"}}>10:32</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Grid container alignItems="center" direction="row" justifyContent="flex-start" >
                <Grid item sx={{display:"flex", float:"right"}}>
                    <Box sx={{
                        minHeight: '40px',
                        borderBottomLeftRadius: '15px',
                        borderBottomRightRadius: '15px',
                        borderTopRightRadius: '15px',
                        marginLeft: '15px',
                        marginBottom:'10px',
                        border: '1px solid #e0e0e0',
                        backgroundColor:"#fff"
                    }}>
                        <Typography sx={{padding: '5px 8px 0px 8px'}}>Здраствуйте, у вас запись в 12:00</Typography>
                        <Typography component="span" sx={{float:"right",fontWeight: "400",fontSize:"12px",color:"primary.main",paddingRight:"2px"}}>10.32</Typography>


                    </Box>
                </Grid>
            </Grid>
            <Grid container alignItems="center" direction="row" justifyContent="flex-end" >
                <Grid item sx={{display:"flex", float:"right"}}>
                    <Box sx={{
                        minHeight: '40px',
                        borderBottomLeftRadius: '15px',
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                        marginRight: '15px',
                        marginBottom:'10px',
                        border: '1px solid #e0e0e0',
                        backgroundColor:"primary.main"
                    }}>
                        <Typography sx={{padding: '5px 8px 0px 8px',color:"#fff"}}>Здраствуйте, хорошо</Typography>
                        <Typography component="span" sx={{float:"right",fontWeight: "400",fontSize:"12px",color:"#fff", paddingRight:"2px"}}>10:32</Typography>
                    </Box>
                </Grid>
            </Grid>

            </Box>





    );
};

export default OneUserMessage;











// <Grid container alignItems="center" direction="row" justifyContent="space-between">
//     <Grid item xs={5} sx={{display:"flex"}}>
//         <Box sx={{
//             minHeight: '40px',
//             borderBottomLeftRadius: '15px',
//             borderTopLeftRadius: '15px',
//             borderTopRightRadius: '15px',
//             border: '1px solid #e0e0e0',
//             marginLeft:"10px",
//
//         }}>
//             <Typography sx={{padding: '5px 8px 0px 8px'}}>Здраствуйте, у вас сегодня запись</Typography>
//             <Typography component="span" sx={{float:"right",fontWeight: "400",fontSize:"12px",color:commonColors.primary}}>10.32</Typography>
//         </Box>
//     </Grid>
// </Grid>
// <Grid container alignItems="center" direction="row" justifyContent="flex-end" >
//     <Grid item xs={5} sx={{display:"flex", float:"right"}}>
//         <Box sx={{
//             minHeight: '40px',
//             borderBottomLeftRadius: '15px',
//             borderTopLeftRadius: '15px',
//             borderTopRightRadius: '15px',
//             border: '1px solid #e0e0e0',
//             marginBottom:"10px",
//             width:"150px"
//         }}>
//             <Typography sx={{padding: '5px 8px 0px 8px'}}>Здраствуйте, хорошо</Typography>
//             <Typography component="span" sx={{float:"right",fontWeight: "400",fontSize:"12px",color:commonColors.primary}}>10.32</Typography>
//         </Box>
//     </Grid>
// </Grid>
