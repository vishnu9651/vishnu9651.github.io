import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import Expedia from "./Expedia";
import Apple from "./Apple";
import Licious from "./Licious";
import Vidfy from "./Vidfy";
function AllProjects(){




    return(
        <SimpleGrid id="project" columns={[1,1, 1,1]} spacingX='40px'>
  
  <Box > <Vidfy /></Box>
  <Box ><Apple /></Box>
  <Box ><Expedia /></Box>
  <Box ><Licious /></Box>
  

    
        
        
        
       
        </SimpleGrid>        

    

    )
}
export default AllProjects