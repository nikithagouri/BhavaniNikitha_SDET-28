package TestRunner_P;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions
(
	features = "src/test/java/Feature_P",
	glue = {"StepDefination_P"},
	tags ={"@SignUp"},
	dryRun = true,
	monochrome = true,
	plugin = {"pretty","html:target/reports/","json:target/reports/jreport.json","junit:target/reports/xmlreport.xml"}
	)
	


public class TestRunner_P {

	
}