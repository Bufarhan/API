using API.Contracts;
using API.Controllers;
using API.Services;
using API.Tests.MockData;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace API.Tests
{
    public class FileManagerServiceController
    {
        [Fact]
        public void GetAll_Should_Return_200Status()
        {
            ///Arrange
            var fileManagerService = new Mock<IFileManagerService>();
            fileManagerService.Setup(_ => _.GetAll()).Returns(FileManagerData.GetFileResponses());
            var sut = new FileManagerController(fileManagerService.Object);

            /// Act
            var result = (OkObjectResult)sut.GetAll();

            ///Assert
            result.StatusCode.Should().Be(200);

        }

    }
}