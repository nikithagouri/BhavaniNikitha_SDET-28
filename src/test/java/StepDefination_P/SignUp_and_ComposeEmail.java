package StepDefination_P;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class SignUp_and_ComposeEmail {
	
	WebDriver driver;
	
	@Given("^User is on the Login Page and clicks on SignUp$")
	public void user_is_on_the_Login_Page_and_clicks_on_SignUp() throws Throwable  {
		
		 System.setProperty("webdriver.chrome.driver","C://Selenium//chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.get("http://elearningm1.upskills.in/");
		 driver.manage().window().maximize();
		 Thread.sleep(3000);
		 driver.findElement(By.linkText("Sign up!")).click();	    
	    
	}

	@When("^Registration page opens up and Enter all the mandatory fields \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void registration_page_opens_up_and_Enter_all_the_mandatory_fields(String arg1, String arg2, String arg3, String arg4, String arg5, String arg6) throws Throwable {
	    
		driver.findElement(By.id("registration_firstname")).sendKeys(arg1);
		driver.findElement(By.id("registration_lastname")).sendKeys(arg2);
		driver.findElement(By.id("registration_email")).sendKeys(arg3);
		driver.findElement(By.id("username")).sendKeys(arg4);
		driver.findElement(By.id("pass1")).sendKeys(arg5);
		driver.findElement(By.id("pass2")).sendKeys(arg6);
			
	}

	@When("^Click on Register button$")
	public void click_on_Register_button() throws Throwable {
		driver.findElement(By.id("registration_submit")).click();
		Thread.sleep(5000);
	   
	}
	@Then("^Success Message is displayed in another page \"([^\"]*)\",\"([^\"]*)\"$")
	public void success_Message_is_displayed_in_another_page(String arg1, String arg2) throws Throwable {
		
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//ul/following-sibling::div/div/p[1]")));
		String ActualMsg=driver.findElement(By.xpath("//ul/following-sibling::div/div/p[1]")).getText();
		System.out.println(ActualMsg);
		String ExpMsg="Dear "+arg1+" " +arg2+',';
		System.out.println(ExpMsg);
		if (ActualMsg.contains(ExpMsg))
		{ System.out.println("Validation Successful");
		
		}
		else
		{
			System.out.println("Validation failed");		
	}
	}    

	@When("^User navigates to Homepage$")
	public void user_navigates_to_Homepage() throws Throwable {
		driver.findElement(By.xpath("//a[@title='Homepage']")).click();
		Thread.sleep(3000);
	    
	}

	@When("^Clicks on Compose$")
	public void clicks_on_Compose() throws Throwable {
		
		driver.findElement(By.linkText("Compose")).click();
		Thread.sleep(3000);    
		
	}

	@When("^Enter Send to,Subject,Message$")
	public void enter_Send_to_Subject_Message() throws Throwable {
		
		 driver.findElement(By.className("select2-search__field")).sendKeys("Vir");
		 Thread.sleep(5000);
		 WebElement textbox = driver.findElement(By.className("select2-search__field"));
		 textbox.sendKeys(Keys.ENTER);
		 
		 Thread.sleep(3000);
		  driver.findElement(By.id("compose_message_title")).sendKeys("TestMail");
		  driver.findElement(By.xpath("//div[@id='cke_1_contents']//iframe"));
		  driver.findElement(By.id("compose_message_compose")).sendKeys("Hello");
		
			
	}

	@When("^Clicks on Send Message$")
	public void clicks_on_Send_Message() {
		
		driver.findElement(By.id("compose_message_compose")).click();
	    
	}

	@Then("^Validate the success message$")
	public void validate_the_success_message()  {
		WebDriverWait wait = new WebDriverWait(driver,30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//div[@class='alert alert-success']")));
		String SuccessMsg=driver.findElement(By.xpath("//div[@class='alert alert-success']")).getText();
		System.out.println(SuccessMsg);
		String ExpMsg = "The message has been sent to";
		if (SuccessMsg.contains(ExpMsg))
		{ System.out.println("Compose mail Validation Successful");		
		}
		else
		{
			System.out.println("Compose mail Validation failed");		
	    }
		driver.quit();
		
	}    
	
}