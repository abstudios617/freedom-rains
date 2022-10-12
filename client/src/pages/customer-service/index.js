import React from 'react';
import { GoodMorningContainer, 
  CustomerServiceContainer,
  AccordionContainer, 
  SearchContainer, 
  Tip1,
  Tip2, 
  Helpful,
} from './customer-service.style';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { AccordionDetails } from '@mui/material';
import ButtonField from '../../components/button-field';
import Search from '../../assets/icons/search.svg';
import ContactUs from '../../components/contact-us';

function CustomerService() {
  return (
    <CustomerServiceContainer>
      <GoodMorningContainer>
        <h3>Good Morning</h3>
        <h3>How Can We Help You Today?</h3>
        <SearchContainer>
          <div>
            <img src={Search} />
            <input/>
          </div>
        </SearchContainer>
      </GoodMorningContainer>
      <AccordionContainer>
        <AccordionSummary>
          Popular Articles
        </AccordionSummary>
       
        <Accordion>
          <AccordionSummary
            expandIcon={'⌄'}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Return an item for a refund
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                <p>If your item arrives damaged, doesnt match the listing description, or is the wrong item, you can return it for a refund. If youve changed your mind and want to return it, you can ask the seller if theyll accept a return.</p>
                <h2>
                Have you already opened a return request? <br/> Take a look at this article to check the status of your return
                </h2>
                <p>
                  If your item you received arrived damaged, doesnt match the listing description, or if its the wrong item, youre covered under the eBay Money Back Guarantee. You can return it even if the selers return policy says they dont accept returns.
                </p>
                <p>
                  If you no longer want an item, youll be able to see in the listing if the seller offers returns, how long you have to request a return, and any other conditions. You can check the listing by selecting the item in your Purchase history. 
                </p>
                <p>
                  Once you start a return, the seller has 3 business days to resolve your issue. If your problem isnt solved at the end of those 3 days, you can ask us to step in and help. 
                </p>
              </div>
              <h3>Start a return</h3>
              <p>
                To start a return, select the item you want to send back from your recent purchases above, or use the button below.
              </p>
              <h2>Return your item</h2>
              <h3>What happens after youve started a return</h3>
              <p>The seller has 3 business days to get back to you. How they respond depends on your reason for your return</p>
              
            </Typography>
          </AccordionDetails>
          <Accordion>
            <AccordionSummary
              expandIcon={'⌄'}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>
                <h3> How to return an item from your Purchase History</h3>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>1. Find the item in your Purchase history and select Return this item.</p>
                <p>
                  2. Select your reason for the return
                </p>
                <p>
                  3. If the item arrived damaged, broken, or faulty, add up to 10 images relevant to the reason you are returning the item for, and showing any scratches or defects. Make sure to follow our images, video, and text policy when youre uploading images. 
                </p>
                <p> 4. Select Send.</p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* TWO  */}
          <Accordion>
            <AccordionSummary
              expandIcon={'⌄'}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>
                <h3>You received a damaged item, it doesnt match the listing description, or its the wrong item</h3>
              </Typography>
            </AccordionSummary>
          </Accordion>
          {/* THREE */}
          <Accordion>
            <AccordionSummary
              expandIcon={'⌄'}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography>
                <h3>You changed your mind about an item</h3>
              </Typography>
            </AccordionSummary>
          </Accordion>
          <div>
            <h3>Send the item back</h3>
            <p>When your return request is accepted, youll receive a return shipping label from either the seller or ebay, or youll be asked to purchase one directly from a carrier. If youre asked to purchase a return shipping label and you purchase the label on eBay, we wil deduct the cost of the label from your refund. Who covers the shipping costs depends on why youre returning it. Find more information about <a href="*">return shipping.</a></p>
            <p>
              Youll also receive a date by which you should ship the item back. You can find this date in the details of your return request which will be sent to your messages with the subject <strong>Send The Item Back</strong>. If you dont ship the return by that date, we may close the request and you will not receive a refund.
            </p>
          </div>
          <Tip1>
            <h3>Tip</h3>
            <p>
              If the item has a total cost of $750 or more, it will neeed to be returned with a signature confirmation. 
            </p>
          </Tip1>
          <Tip2>
            <h3>Tip</h3>
            <p>
              If the item has a total cost of $750 or more, it will neeed to be returned with a signature confirmation. 
            </p>
          </Tip2>
          <Helpful>
            <h3>Was this article helpful?</h3>
            <div>
              <ButtonField color="outline">Yes</ButtonField>
              <ButtonField color="outline">No</ButtonField>
            </div>
          
          </Helpful>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={'⌄'}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Tracking your items
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={'⌄'}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              How I get token from game
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={'⌄'}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              How to use my coupons
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={'⌄'}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              How can I create a store on Freedom
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={'⌄'}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Get help with an item that hasnt arrived
            </Typography>
          </AccordionSummary>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={'⌄'}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
             What is new on Freedom
            </Typography>
          </AccordionSummary>
        </Accordion>
      </AccordionContainer>
      <ContactUs/>
    </CustomerServiceContainer>
  );
}

export default CustomerService;

