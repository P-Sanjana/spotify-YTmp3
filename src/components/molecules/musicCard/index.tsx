import React, { FC } from "react";
import { Card, CardContent, styled } from "@mui/material";

import Image from "../../atoms/image";
import theme from "../../../theme/theme";
import Typography from "../../atoms/typography";

type MusicCardProps = {
    title: string;
    description?: string;
    image: string;
}

const StyledCard = styled(Card)({
    backgroundColor: theme.palette.primary.main,
    maxWidth: '230px',
    display: 'flex',
    justifyContent: 'center',
    transition: "transform 0.2s ease-in-out",
    "&:hover": { transform: "scale3d(1.02, 1.02, 0.5)"},
});

const MusicCard: FC<MusicCardProps> = (props) => {
    return <StyledCard variant="outlined"> 
        <CardContent>
        <Image src={props?.image} style={{width: '200px', height: '200px'}}/>
            <Typography variant="h5" color={theme.palette.text.primary}>{props?.title}</Typography>
            <Typography variant="subtitle1" color={theme.palette.text.primary}>{props?.description ?? ''}</Typography>
        </CardContent>
    </StyledCard>
}

export default MusicCard;