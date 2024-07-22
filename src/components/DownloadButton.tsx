import React, {FC} from "react";
import { Button } from "@mui/material";

interface Props{
    name: string
    href: string
}

const DownloadButton: FC<Props> = ({name, href}) => (
    <Button variant="contained" sx={{width: '100%'}} href={href}>
        {name}
    </Button>
)

export default DownloadButton